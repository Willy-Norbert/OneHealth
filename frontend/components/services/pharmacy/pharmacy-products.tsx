import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pill, ShoppingCart, Heart, Star } from "lucide-react"

export default function PharmacyProducts() {
  const categories = [
    "Prescription Medications",
    "Over-the-Counter",
    "Chronic Conditions",
    "Vitamins & Supplements",
    "Personal Care",
    "Medical Devices",
    "First Aid",
    "Baby & Maternal",
  ]

  const featuredProducts = [
    {
      name: "Blood Pressure Monitor",
      category: "Medical Devices",
      image: "/placeholder.svg?height=200&width=200&text=BP+Monitor",
      price: "RWF 45,000",
      rating: 4.8,
      reviews: 124,
    },
    {
      name: "Multivitamin Complex",
      category: "Vitamins & Supplements",
      image: "/placeholder.svg?height=200&width=200&text=Multivitamin",
      price: "RWF 12,500",
      rating: 4.6,
      reviews: 89,
    },
    {
      name: "Diabetes Test Strips",
      category: "Chronic Conditions",
      image: "/placeholder.svg?height=200&width=200&text=Test+Strips",
      price: "RWF 18,000",
      rating: 4.9,
      reviews: 203,
    },
    {
      name: "First Aid Kit",
      category: "First Aid",
      image: "/placeholder.svg?height=200&width=200&text=First+Aid+Kit",
      price: "RWF 22,000",
      rating: 4.7,
      reviews: 156,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Our <span className="text-purple-600">Product Categories</span>
          </h2>
          <p className="text-xl text-gray-600">
            From prescription medications to healthcare essentials, we offer a comprehensive range of products for all
            your health needs.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-800 font-medium border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Products */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover p-4"
                  />
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">{product.category}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-600">{product.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ShoppingCart className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700">
            View All Products <Pill className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
