
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import MoodSelector from "@/components/MoodSelector";
import MoodBasedMusic from "@/components/MoodBasedMusic";
import GoalTracker from "@/components/GoalTracker";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthProvider";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { theme } = useTheme();
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

  useEffect(() => {
    // Check time of day to show appropriate greeting
    const currentHour = new Date().getHours();
    let greeting = "Olá";
    
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }
    
    toast({
      title: `${greeting}!`,
      description: theme === "dark" 
        ? "O modo noturno está ativado para seu conforto." 
        : "Esperamos que você tenha um ótimo dia!",
      duration: 3000,
    });
  }, [theme, toast]);

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
        
        <MoodBasedMusic selectedMood={selectedMood} />
        
        <div className="mt-8">
          <GoalTracker />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
