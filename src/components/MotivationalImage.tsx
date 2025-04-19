
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from 'lucide-react';

const motivationalImages = [
  {
    url: '/placeholder.svg',
    quote: "Cada pequeno passo é uma vitória"
  },
  {
    url: '/placeholder.svg',
    quote: "Sua força interior é imensurável"
  },
  {
    url: '/placeholder.svg',
    quote: "Acredite na sua jornada"
  },
  {
    url: '/placeholder.svg',
    quote: "Transforme seus sonhos em realidade"
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
    <Card className="overflow-hidden bg-gradient-to-br from-aura-soft-green/50 to-aura-soft-beige/50 dark:from-dark-soft-green/30 dark:to-dark-soft-beige/30 border-none shadow-lg">
      <CardContent className="p-4">
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src={motivationalImages[currentIndex].url}
            alt="Imagem motivacional"
            className="w-full h-48 object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
            <p className="text-white text-lg font-medium flex items-center gap-2 animate-fade-in">
              <Sparkles size={20} className="text-yellow-300" />
              {motivationalImages[currentIndex].quote}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
