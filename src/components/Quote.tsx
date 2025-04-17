
import { useState, useEffect } from "react";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteProps {
  className?: string;
}

const quotes = [
  {
    text: "Cuide da sua mente como você cuida do seu jardim: regue com bons pensamentos diariamente.",
    author: "Anônimo"
  },
  {
    text: "Respirar fundo é como reiniciar a mente. Faça isso quando precisar.",
    author: "Anônimo"
  },
  {
    text: "Sua paz interior é o maior presente que você pode dar a si mesmo.",
    author: "Anônimo"
  },
  {
    text: "A ansiedade não remove o sofrimento de amanhã, mas esvazia a força de hoje.",
    author: "Corrie ten Boom"
  },
  {
    text: "A maior vitória é a que se conquista sobre si mesmo.",
    author: "Platão"
  },
  {
    text: "Se você quer ir rápido, vá sozinho. Se quer ir longe, vá acompanhado.",
    author: "Provérbio Africano"
  },
  {
    text: "O otimismo é a fé que leva à realização. Nada pode ser feito sem esperança e confiança.",
    author: "Helen Keller"
  }
];

export default function Quote({ className = "" }: QuoteProps) {
  const [quote, setQuote] = useState(quotes[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className={`relative p-5 rounded-xl bg-aura-soft-beige ${className} ${fadeIn ? 'animate-fade-in' : ''}`}>
      <QuoteIcon size={24} className="absolute top-4 left-4 text-aura-dark-green opacity-20" />
      <div className="pl-6 pr-2">
        <p className="text-lg font-medium text-aura-dark-green italic">"{quote.text}"</p>
        <p className="text-right text-sm mt-3 text-aura-dark-green/70">— {quote.author}</p>
      </div>
    </div>
  );
}
