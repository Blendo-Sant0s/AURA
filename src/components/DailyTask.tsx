
import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

interface DailyTaskProps {
  task: string;
  description?: string;
}

export default function DailyTask({ task, description }: DailyTaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div 
      className={`p-4 rounded-lg ${isCompleted ? 'bg-aura-dark-green/10' : 'bg-aura-soft-green'} 
        mb-3 transition-all cursor-pointer`}
      onClick={toggleCompleted}
    >
      <div className="flex items-start">
        <div className="mt-0.5">
          {isCompleted ? (
            <CheckCircle size={20} className="text-aura-dark-green" />
          ) : (
            <Circle size={20} className="text-aura-dark-green/60" />
          )}
        </div>
        <div className="ml-3 flex-1">
          <h3 className={`font-medium ${isCompleted ? 'text-aura-dark-green/70 line-through' : 'text-aura-dark-green'}`}>
            {task}
          </h3>
          {description && (
            <p className={`text-sm mt-1 ${isCompleted ? 'text-aura-dark-green/50' : 'text-aura-dark-green/70'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
