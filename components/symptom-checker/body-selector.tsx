"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BodySelectorProps {
  selectedPart: string;
  onSelectPart: (part: string) => void;
}

export default function BodySelector({ selectedPart, onSelectPart }: BodySelectorProps) {
  const bodyParts = {
    head: ["Head", "Face", "Eyes", "Ears", "Nose", "Mouth", "Throat"],
    torso: ["Chest", "Back", "Abdomen", "Pelvis"],
    arms: ["Shoulders", "Arms", "Elbows", "Wrists", "Hands", "Fingers"],
    legs: ["Hips", "Legs", "Knees", "Ankles", "Feet", "Toes"],
    general: ["Whole body", "Skin", "Joints", "Muscles", "Nerves"],
  }

  return (
    <div className="rounded-lg border p-4">
      <Tabs defaultValue="head">
        <TabsList className="mb-4 grid w-full grid-cols-5">
          <TabsTrigger value="head">Head</TabsTrigger>
          <TabsTrigger value="torso">Torso</TabsTrigger>
          <TabsTrigger value="arms">Arms</TabsTrigger>
          <TabsTrigger value="legs">Legs</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>

        {Object.entries(bodyParts).map(([region, parts]) => (
          <TabsContent key={region} value={region} className="mt-0">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {parts.map((part) => (
                <div
                  key={part}
                  onClick={() => onSelectPart(part)}
                  className={`cursor-pointer rounded-md border p-3 text-center transition-colors hover:bg-blue-50 ${
                    selectedPart === part ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  {part}
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
