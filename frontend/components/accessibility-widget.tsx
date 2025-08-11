"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accessibility, X, ZoomIn, ZoomOut, Moon, Type } from "lucide-react"

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    if (!highContrast) {
      document.body.classList.add("high-contrast")
    } else {
      document.body.classList.remove("high-contrast")
    }
  }

  return (
    <>
      <Button
        onClick={toggleWidget}
        className="fixed bottom-24 right-4 z-40 rounded-full w-12 h-12 p-0 bg-blue-600 hover:bg-blue-700 shadow-lg"
        aria-label="Accessibility options"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-20 z-40 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Accessibility</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleWidget}
              className="h-8 w-8"
              aria-label="Close accessibility widget"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Text Size</h4>
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  className="h-8 w-8"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">{fontSize}%</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  className="h-8 w-8"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={resetFontSize} className="text-xs h-8">
                  Reset
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Display Options</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleHighContrast}
                  className={`text-xs h-9 ${highContrast ? "bg-blue-600" : ""}`}
                >
                  <Type className="h-4 w-4 mr-2" />
                  High Contrast
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.documentElement.classList.toggle("dark")}
                  className="text-xs h-9"
                >
                  <Moon className="h-4 w-4 mr-2" />
                  Dark Mode
                </Button>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500">These settings will be saved for your next visit.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
