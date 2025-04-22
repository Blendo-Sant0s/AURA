
import { useState, useEffect } from "react";
import { Trophy, Star } from "lucide-react";

interface QuoteProps {
  className?: string;
}

const quotes = [
  {
    text: "O sucesso não acontece por acaso. É trabalho duro, perseverança, aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que você está fazendo.",
    author: "Aura Atlética"
  },
  {
    text: "A diferença entre o impossível e o possível está na determinação de uma pessoa.",
    author: "Tommy Lasorda"
  },
  {
    text: "Não é sobre ter tempo, é sobre fazer tempo. Discipline-se para o sucesso.",
    author: "Aura Atlética"
  },
  {
    text: "A dor que você sente hoje será a força que você sentirá amanhã.",
    author: "Aura Atlética"
  },
  {
    text: "Os obstáculos não devem te impedir. Se você encontrar uma parede, não desista. Descubra como escalá-la.",
    author: "Michael Jordan"
  },
  {
    text: "Campeões não são feitos em academias. Campeões são feitos de algo que eles têm profundamente dentro deles.",
    author: "Muhammad Ali"
  },
  {
    text: "Defina seus objetivos alto e não pare até chegar lá.",
    author: "Bo Jackson"
  }
];

export default function Quote({ className = "" }: QuoteProps) {
  const [quote, setQuote] = useState(quotes[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
        setFadeIn(true);
      }, 300);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative p-5 rounded-xl bg-aura-royal/20 dark:bg-dark-royal/20 backdrop-blur-sm border border-aura-royal/10 dark:border-dark-ice/10 ${className} ${fadeIn ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-300`}>
      <Trophy size={24} className="absolute top-4 left-4 text-aura-royal dark:text-dark-royal opacity-40" />
      <div className="pl-6 pr-2">
        <p className="text-lg font-medium text-aura-dark dark:text-dark-ice italic">{quote.text}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm text-aura-dark/70 dark:text-dark-ice/70">— {quote.author}</p>
          <Star size={16} className="text-aura-lime dark:text-dark-lime" />
        </div>
      </div>
    </div>
  );
}
