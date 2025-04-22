
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import MoodSelector from "@/components/MoodSelector";
import MoodBasedMusic from "@/components/MoodBasedMusic";
import GoalTracker from "@/components/GoalTracker";
import { MotivationalImage } from "@/components/MotivationalImage";
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
          title: user.isAnonymous ? "Bem-vindo, Atleta!" : `Bem-vindo de volta, ${user.name || "Atleta"}!`,
          description: "Como está sua energia hoje?",
          duration: 4000,
        });
      }, 1500);
    }
  }, [toast, user]);

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greeting = "";
    
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Bom dia, hora de começar com energia!";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Boa tarde, continue dando o seu melhor!";
    } else {
      greeting = "Boa noite, hora de recuperar para amanhã!";
    }
    
    toast({
      title: greeting,
      description: theme === "dark" 
        ? "Modo noturno ativado para seu descanso." 
        : "Pronto para mais um dia de superação?",
      duration: 3000,
    });
  }, [theme, toast]);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    
    let message = "";
    switch(mood) {
      case "Feliz":
        message = "Energia positiva! Vamos aproveitar esse momento para superar limites.";
        break;
      case "Motivado":
        message = "Excelente! Você está no caminho certo para alcançar seus objetivos.";
        break;
      case "Cansado":
        message = "A recuperação é parte do processo. Talvez uma música leve ajude.";
        break;
      case "Frustrado":
        message = "Obstáculos são oportunidades disfarçadas. Vamos superar isso juntos.";
        break;
      default:
        message = "Seu bem-estar é importante para seu desempenho. Como podemos ajudar hoje?";
    }
    
    toast({
      title: "Obrigado por compartilhar!",
      description: message,
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="aura-container">
        <Header title={`Olá, ${user?.name || "Atleta"}`} showNotification />
        
        <div className="space-y-6">
          <Quote />
          <MotivationalImage />
          <MoodSelector onSelect={handleMoodSelect} />
          <MoodBasedMusic selectedMood={selectedMood} />
          <GoalTracker />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
