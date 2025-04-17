
import { useState } from "react";
import { Target, Check, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Goal {
  id: string;
  text: string;
  completed: boolean;
}

export default function GoalTracker() {
  const { toast } = useToast();
  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", text: "Praticar 5 minutos de mindfulness", completed: false },
    { id: "2", text: "Escrever 3 coisas positivas do dia", completed: false },
    { id: "3", text: "Fazer uma atividade que me deixe feliz", completed: false }
  ]);

  const toggleGoal = (id: string) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const completed = !goal.completed;
        if (completed) {
          toast({
            title: "Meta alcançada! 🎉",
            description: "Continue assim, você está indo muito bem!",
            duration: 3000,
          });
        }
        return { ...goal, completed };
      }
      return goal;
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-aura-text flex items-center">
          <Target size={20} className="mr-2" />
          Metas Diárias
        </h2>
        <button className="text-aura-text/70 hover:text-aura-text">
          <Plus size={20} />
        </button>
      </div>
      
      <div className="space-y-3">
        {goals.map(goal => (
          <button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            className={`w-full p-4 rounded-lg flex items-center justify-between transition-all ${
              goal.completed
                ? "bg-aura-dark-green/50 text-aura-text/70"
                : "bg-aura-dark-green/30 text-aura-text hover:bg-aura-dark-green/40"
            }`}
          >
            <span className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                goal.completed ? "border-aura-text/70 bg-aura-text/70" : "border-aura-text"
              }`}>
                {goal.completed && <Check size={12} className="text-aura-soft-green" />}
              </div>
              {goal.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
