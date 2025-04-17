
import { useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Reflection {
  id: number;
  question: string;
  answer: string | null;
  date: string;
}

const Reflexoes = () => {
  const { toast } = useToast();
  const [activeReflection, setActiveReflection] = useState<Reflection | null>(null);
  const [answer, setAnswer] = useState("");
  const [reflections, setReflections] = useState<Reflection[]>([
    {
      id: 1,
      question: "O que te fez sorrir hoje?",
      answer: null,
      date: "Hoje"
    },
    {
      id: 2,
      question: "Quais são as três coisas pelas quais você é grato hoje?",
      answer: null,
      date: "Hoje"
    },
    {
      id: 3,
      question: "O que você aprendeu recentemente que mudou sua perspectiva?",
      answer: null,
      date: "Hoje"
    },
    {
      id: 4,
      question: "Se pudesse mudar uma coisa no seu dia, o que seria?",
      answer: null,
      date: "Ontem"
    }
  ]);

  const handleSelectReflection = (reflection: Reflection) => {
    setActiveReflection(reflection);
    setAnswer(reflection.answer || "");
  };

  const handleSubmitAnswer = () => {
    if (!activeReflection || !answer.trim()) return;

    // Atualizar a reflexão com a resposta
    const updatedReflections = reflections.map(r => 
      r.id === activeReflection.id ? { ...r, answer: answer.trim() } : r
    );
    
    setReflections(updatedReflections);
    setActiveReflection(null);
    setAnswer("");
    
    toast({
      title: "Reflexão salva!",
      description: "Sua resposta foi registrada com sucesso.",
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="aura-container">
        <Header title="Reflexões diárias" />
        
        {activeReflection ? (
          <div className="mt-4 animate-fade-in">
            <button 
              onClick={() => setActiveReflection(null)}
              className="text-sm text-aura-dark-green mb-4 flex items-center"
            >
              ← Voltar
            </button>
            
            <div className="p-4 bg-aura-soft-beige rounded-lg mb-4">
              <h3 className="text-lg font-medium text-aura-dark-green mb-2">
                {activeReflection.question}
              </h3>
              <p className="text-xs text-aura-dark-green/70">
                {activeReflection.date}
              </p>
            </div>
            
            <div className="mt-4">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Digite sua resposta aqui..."
                className="w-full p-4 rounded-lg bg-aura-soft-green border border-aura-dark-green/10 
                  focus:outline-none focus:ring-2 focus:ring-aura-dark-green/30 min-h-[150px]"
              />
              
              <button
                onClick={handleSubmitAnswer}
                disabled={!answer.trim()}
                className="aura-button w-full mt-4 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Salvar reflexão
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-sm text-aura-dark-green/80 mb-4">
              Responda a estas perguntas para refletir sobre seu dia e cultivar uma mente mais consciente.
            </p>
            
            {reflections.map((reflection, index) => {
              // Agrupar por data
              const showDateHeader = index === 0 || reflections[index - 1].date !== reflection.date;
              
              return (
                <div key={reflection.id}>
                  {showDateHeader && (
                    <h3 className="text-xs font-medium text-aura-dark-green/70 mb-2 mt-4">
                      {reflection.date}
                    </h3>
                  )}
                  
                  <div 
                    onClick={() => handleSelectReflection(reflection)}
                    className={`p-4 rounded-lg mb-3 cursor-pointer transition-all ${
                      reflection.answer 
                        ? "bg-aura-dark-green/10" 
                        : "bg-aura-soft-green hover:bg-aura-soft-beige"
                    }`}
                  >
                    <div className="flex items-start">
                      <MessageCircle 
                        size={20} 
                        className={reflection.answer 
                          ? "text-aura-dark-green" 
                          : "text-aura-dark-green/60"
                        } 
                      />
                      <div className="ml-3 flex-1">
                        <h3 className="font-medium text-aura-dark-green">
                          {reflection.question}
                        </h3>
                        {reflection.answer ? (
                          <p className="text-sm mt-1 text-aura-dark-green/70 line-clamp-2">
                            {reflection.answer}
                          </p>
                        ) : (
                          <p className="text-sm mt-1 text-aura-dark-green/60 italic">
                            Toque para responder
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Reflexoes;
