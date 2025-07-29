import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest health tips, medical news, and updates from ONE HEALTHLINE CONNECT delivered directly to your
            inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input type="email" placeholder="Your email address" className="flex-grow" required />
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our{" "}
            <Link href="/privacy-policy" className="underline hover:text-blue-600">
              Privacy Policy
            </Link>{" "}
            and consent to receive health-related emails from ONE HEALTHLINE CONNECT.
          </p>
        </div>
      </div>
    </section>
  )
}
