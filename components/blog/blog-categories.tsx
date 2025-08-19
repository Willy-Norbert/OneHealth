"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { blogCategories } from "@/lib/blog-data"

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          className={activeCategory === "all" ? "bg-blue-600 hover:bg-blue-700" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All
        </Button>

        {blogCategories.map((category) => (
          <Button
            key={category.slug}
            variant={activeCategory === category.slug ? "default" : "outline"}
            className={activeCategory === category.slug ? "bg-blue-600 hover:bg-blue-700" : ""}
            onClick={() => setActiveCategory(category.slug)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
