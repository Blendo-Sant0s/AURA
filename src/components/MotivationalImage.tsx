
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from 'lucide-react';

const motivationalImages = [
  {
    url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: "Cada passo te aproxima do seu objetivo"
  },
  {
    url: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: "Supere seus limites a cada dia"
  },
  {
    url: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: "Disciplina é o caminho para a vitória"
  },
  {
    url: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: "Transforme o suor de hoje no sucesso de amanhã"
  }
];

export function MotivationalImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === motivationalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-aura-royal/10 to-aura-lime/10 dark:from-dark-royal/20 dark:to-dark-lime/10 border-aura-royal/20 dark:border-dark-ice/10 shadow-lg">
      <CardContent className="p-4">
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src={motivationalImages[currentIndex].url}
            alt="Imagem motivacional"
            className="w-full h-48 object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aura-dark/80 to-transparent flex items-end justify-center p-4">
            <p className="text-aura-ice text-lg font-medium flex items-center gap-2 animate-fade-in">
              <Award size={20} className="text-aura-lime dark:text-dark-lime" />
              {motivationalImages[currentIndex].quote}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
