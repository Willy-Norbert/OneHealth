/* eslint-disable react/no-unescaped-entities */
import { Star } from "lucide-react"

export default function EmergencyTestimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Lives Saved Through Our Emergency Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Read about real experiences from patients who received emergency care from ONE HEALTHLINE CONNECT.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <div className="mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mb-4 italic text-gray-700">
              "I was having severe chest pain at home when my wife called ONE HEALTHLINE CONNECT. The ambulance arrived
              within 10 minutes, and the paramedics immediately began treatment. They saved my life - I was having a
              major heart attack. The speed and professionalism of the team was incredible."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                {/* Placeholder for profile image */}
              </div>
              <div>
                <p className="font-semibold text-gray-900">Jean-Paul Mugisha</p>
                <p className="text-sm text-gray-600">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <div className="mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mb-4 italic text-gray-700">
              "My son had a severe allergic reaction while we were at a family gathering in a rural area. I didn't think
              help would reach us in time, but ONE HEALTHLINE CONNECT's emergency team arrived quickly and administered
              life-saving treatment. Their calm expertise during such a frightening situation was remarkable."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                {/* Placeholder for profile image */}
              </div>
              <div>
                <p className="font-semibold text-gray-900">Marie Uwimana</p>
                <p className="text-sm text-gray-600">Huye, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <div className="mb-4 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mb-4 italic text-gray-700">
              "I was in a serious car accident on the highway. The ONE HEALTHLINE CONNECT emergency team arrived quickly,
              stabilized me at the scene, and coordinated with the hospital so everything was ready when I arrived.
              Their quick action prevented permanent damage. I'm forever grateful for their expertise."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                {/* Placeholder for profile image */}
              </div>
              <div>
                <p className="font-semibold text-gray-900">Emmanuel Hakizimana</p>
                <p className="text-sm text-gray-600">Musanze, Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-red-50 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Emergency Response Statistics</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-700">
                    Average response time: <strong>12 minutes</strong>
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-700">
                    Emergencies responded to last year: <strong>4,500+</strong>
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-700">
                    Lives saved: <strong>98% survival rate</strong> for critical emergencies
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-700">
                    Patient satisfaction: <strong>4.9/5</strong> average rating
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Commitment</h3>
              <p className="mb-4 text-gray-700">
                At ONE HEALTHLINE CONNECT, we're committed to providing the fastest, most professional emergency medical care
                possible. Our teams undergo rigorous training and use the latest medical equipment to ensure the best
                outcomes for patients in emergency situations.
              </p>
              <p className="text-gray-700">
                We continuously work to improve our response times and coverage areas to serve all Rwandans, no matter
                where they are located.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
