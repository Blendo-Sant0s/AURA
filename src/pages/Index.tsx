
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import MoodSelector from "@/components/MoodSelector";
import DailyTask from "@/components/DailyTask";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [userName, setUserName] = useState("Visitante");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    // Simular carregamento de nome de usuário
    setTimeout(() => {
      setUserName("Usuário");
      toast({
        title: "Bem-vindo de volta!",
        description: "Que bom ver você por aqui novamente.",
        duration: 3000,
      });
    }, 1500);
  }, [toast]);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Humor registrado!",
      description: `Obrigado por compartilhar como está se sentindo.`,
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="aura-container">
        <Header title={`Olá, ${userName}`} showNotification />
        
        <Quote className="my-4" />
        
        <MoodSelector onSelect={handleMoodSelect} />
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium text-aura-dark-green">Sua jornada de hoje</h2>
            <button className="text-xs text-aura-dark-green/70 underline">Ver tudo</button>
          </div>
          
          <DailyTask 
            task="5 minutos de meditação" 
            description="Encontre um lugar tranquilo e foque na sua respiração"
          />
          
          <DailyTask 
            task="Beber 2 litros de água" 
            description="Mantenha-se hidratado para um melhor bem-estar"
          />
          
          <DailyTask 
            task="Praticar gratidão" 
            description="Anote 3 coisas pelas quais você é grato hoje"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
