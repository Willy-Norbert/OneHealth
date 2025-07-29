/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Filter, ChevronDown, ChevronUp } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorReviews({ doctor }: { doctor: Doctor }) {
  const [sortBy, setSortBy] = useState<"recent" | "highest" | "lowest">("recent")
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [expandedReviews, setExpandedReviews] = useState<string[]>([])

  // Calculate average ratings by category
  const categoryRatings: Record<string, { total: number; count: number }> = {}
  doctor.reviews.forEach((review) => {
    review.categories?.forEach((category) => {
      if (!categoryRatings[category.name]) {
        categoryRatings[category.name] = { total: 0, count: 0 }
      }
      categoryRatings[category.name].total += category.rating
      categoryRatings[category.name].count += 1
    })
  })

  // Sort reviews based on selected option
  const sortedReviews = [...doctor.reviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "highest") {
      return b.rating - a.rating
    } else {
      return a.rating - b.rating
    }
  })

  const toggleReviewExpansion = (reviewId: string) => {
    setExpandedReviews((prev) => (prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Patient Reviews</h2>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Write a Review
            </Button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            {/* Overall Rating Summary */}
            <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-200">
              <div className="md:w-1/3 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{doctor.rating}</div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(doctor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-500">{doctor.reviewCount} reviews</p>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Breakdown</h3>
                <div className="space-y-3">
                  {Object.entries(categoryRatings).map(([category, { total, count }]) => {
                    const averageRating = (total / count).toFixed(1)
                    return (
                      <div key={category} className="flex items-center">
                        <span className="w-32 text-gray-700">{category}</span>
                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-green-600 h-2.5 rounded-full"
                            style={{ width: `${(Number.parseFloat(averageRating) / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-900 font-medium">{averageRating}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Review Form (conditionally rendered) */}
            {showReviewForm && (
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Write Your Review</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                      Overall Rating
                    </label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="p-1 focus:outline-none"
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Knowledge", "Bedside Manner", "Wait Time", "Office Environment"].map((category) => (
                      <div key={category}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{category}</label>
                        <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                          <option value="">Select rating</option>
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <option key={rating} value={rating}>
                              {rating} {rating === 1 ? "star" : "stars"}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review
                    </label>
                    <textarea
                      id="review"
                      rows={4}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Share your experience with this doctor..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="verified"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="verified" className="ml-2 block text-sm text-gray-700">
                      I confirm this is a genuine patient experience
                    </label>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                      Cancel
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">Submit Review</Button>
                  </div>
                </form>
              </div>
            )}

            {/* Reviews Filter */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Patient Reviews ({doctor.reviews.length})</h3>
              <div className="flex items-center">
                <Filter className="h-4 w-4 text-gray-500 mr-2" />
                <select
                  className="bg-white border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="recent">Most Recent</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                </select>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {sortedReviews.map((review) => {
                const isExpanded = expandedReviews.includes(review.id)
                const isLongReview = review.comment.length > 250

                return (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={review.patientImage || "/placeholder.svg?height=50&width=50&text=User"}
                          alt={review.patientName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-gray-900">{review.patientName}</h4>
                            <p className="text-gray-500 text-sm">{review.date}</p>
                          </div>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="mt-2">
                          <p className="text-gray-700">
                            {isLongReview && !isExpanded ? `${review.comment.substring(0, 250)}...` : review.comment}
                          </p>
                          {isLongReview && (
                            <button
                              className="text-blue-600 hover:text-blue-800 text-sm mt-1 flex items-center"
                              onClick={() => toggleReviewExpansion(review.id)}
                            >
                              {isExpanded ? (
                                <>
                                  Show less <ChevronUp className="h-4 w-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  Read more <ChevronDown className="h-4 w-4 ml-1" />
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {review.categories && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {review.categories.map((category) => (
                              <div
                                key={category.name}
                                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs flex items-center"
                              >
                                <span>{category.name}:</span>
                                <span className="ml-1 font-medium">{category.rating}/5</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {review.verified && (
                          <div className="mt-3 flex items-center text-green-600 text-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Verified Patient
                          </div>
                        )}

                        <div className="mt-3 flex items-center">
                          <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pagination */}
            {doctor.reviews.length > 5 && (
              <div className="mt-8 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-l-md"
                  >
                    Previous
                  </a>
                  <a href="#" className="py-2 px-4 bg-green-600 text-white border border-green-600">
                    1
                  </a>
                  <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
                    2
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-r-md"
                  >
                    Next
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
