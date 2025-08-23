"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NotFound() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightGif =
    "https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif";
  const darkGif =
    "https://cdn.dribbble.com/userupload/25724019/file/original-5f26ebb903866b4d2badc22f3e8938aa.gif";

  // Prevent rendering until mounted (avoids hydration mismatch)
  const gifSrc = !mounted ? lightGif : theme === "dark" ? darkGif : lightGif;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 transition-colors duration-300 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* 404 Illustration */}
        <div className="mx-auto w-64 h-64 relative">
          <Image
            src={gifSrc}
            alt="404 Illustration"
            fill
            unoptimized
            className="object-contain rounded-xl"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          The page you’re looking for doesn’t exist, was moved, or might be
          temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/">Return Home</Link>
          </Button>

          <Button asChild variant="outline" className="dark:border-gray-600">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>

        {/* Suggested Links */}
        <div className="pt-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
            You might be looking for:
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/doctors"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Find a Doctor
              </Link>
            </li>
            <li>
              <Link
                href="/appointments"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Book an Appointment
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
