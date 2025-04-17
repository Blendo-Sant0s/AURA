
import { useState } from "react";
import { Smile, Frown, Meh, Heart } from "lucide-react";

interface MoodOption {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

interface MoodSelectorProps {
  onSelect: (mood: string) => void;
}

export default function MoodSelector({ onSelect }: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods: MoodOption[] = [
    { value: "calmo", label: "Calmo", icon: Smile, color: "bg-blue-100 text-blue-600" },
    { value: "energetico", label: "Energético", icon: Heart, color: "bg-red-100 text-red-600" },
    { value: "reflexivo", label: "Reflexivo", icon: Meh, color: "bg-purple-100 text-purple-600" },
    { value: "ansioso", label: "Ansioso", icon: Frown, color: "bg-yellow-100 text-yellow-600" },
  ];

  const handleSelect = (mood: string) => {
    setSelectedMood(mood);
    onSelect(mood);
  };

  return (
    <div className="py-4">
      <h3 className="text-sm font-medium text-aura-dark-green/80 mb-3">Como você está se sentindo hoje?</h3>
      <div className="flex justify-between">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => handleSelect(mood.value)}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              selectedMood === mood.value
                ? `${mood.color} scale-105 shadow-sm`
                : "bg-aura-soft-green text-aura-dark-green/70 hover:bg-aura-soft-beige"
            }`}
          >
            <mood.icon size={24} className="mb-1" />
            <span className="text-xs">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
