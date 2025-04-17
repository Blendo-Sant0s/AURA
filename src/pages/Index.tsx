
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import MoodSelector from "@/components/MoodSelector";
import MoodBasedMusic from "@/components/MoodBasedMusic";
import GoalTracker from "@/components/GoalTracker";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthProvider";

const Index = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        toast({
          title: user.isAnonymous ? "Bem-vindo!" : "Bem-vindo de volta!",
          description: "Como está se sentindo hoje?",
          duration: 4000,
        });
      }, 1500);
    }
  }, [toast, user]);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Obrigado por compartilhar!",
      description: "Seu bem-estar é importante para nós. Como podemos ajudar hoje?",
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="aura-container">
        <Header title={`Olá, ${user?.name || "Visitante"}`} showNotification />
        
        <Quote className="my-6" />
        
        <MoodSelector onSelect={handleMoodSelect} />
        
        {/* Add the new mood-based music component */}
        <MoodBasedMusic selectedMood={selectedMood} />
        
        <div className="mt-8">
          <GoalTracker />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
