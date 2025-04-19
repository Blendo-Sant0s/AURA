
import { useState, useEffect } from "react";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteProps {
  className?: string;
}

const quotes = [
  {
    text: "Cada pequeno passo que você dá hoje é uma vitória para seu futuro.",
    author: "Aura"
  },
  {
    text: "Sua força interior é maior do que qualquer desafio que você enfrenta.",
    author: "Aura"
  },
  {
    text: "Transforme seus pensamentos e você transformará sua realidade.",
    author: "Aura"
  },
  {
    text: "Você é mais forte do que pensa e mais capaz do que imagina.",
    author: "Aura"
  },
  {
    text: "O autocuidado não é egoísmo, é uma necessidade para seu bem-estar.",
    author: "Aura"
  },
  {
    text: "Sua jornada é única, celebre cada progresso.",
    author: "Aura"
  },
  {
    text: "Respire fundo. Você está exatamente onde precisa estar agora.",
    author: "Aura"
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
    <div className={`relative p-5 rounded-xl bg-aura-dark-green/30 dark:bg-dark-dark-green/40 backdrop-blur-sm border border-aura-text/10 dark:border-dark-text/20 ${className} ${fadeIn ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-300`}>
      <QuoteIcon size={24} className="absolute top-4 left-4 text-aura-text dark:text-dark-text opacity-20" />
      <div className="pl-6 pr-2">
        <p className="text-lg font-medium text-aura-text dark:text-dark-text italic">{quote.text}</p>
        <p className="text-right text-sm mt-3 text-aura-text/70 dark:text-dark-text/70">— {quote.author}</p>
      </div>
    </div>
  );
}
