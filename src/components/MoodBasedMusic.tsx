
import { useState, useEffect } from "react";
import { Music, Play, Pause, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface MusicRecommendation {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
  mood: string;
}

interface MoodBasedMusicProps {
  selectedMood: string | null;
}

// Sample music data - in a real app this would come from an API
const musicData: MusicRecommendation[] = [
  {
    id: 1,
    title: "Manhã Tranquila",
    artist: "Natureza Sonora",
    duration: "3:45",
    cover: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=500",
    mood: "calmo"
  },
  {
    id: 2,
    title: "Energia Vital",
    artist: "Vida Plena",
    duration: "4:20",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500",
    mood: "energetico"
  },
  {
    id: 3,
    title: "Pensamentos Profundos",
    artist: "Alma Contemplativa",
    duration: "5:10",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    mood: "reflexivo"
  },
  {
    id: 4,
    title: "Alívio Mental",
    artist: "Paz Interior",
    duration: "3:55",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500",
    mood: "ansioso"
  }
];

export default function MoodBasedMusic({ selectedMood }: MoodBasedMusicProps) {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState<MusicRecommendation | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (selectedMood) {
      // Find music that matches the mood
      const matches = musicData.filter(music => music.mood === selectedMood);
      
      if (matches.length > 0) {
        // Select a random music from the matches
        const randomIndex = Math.floor(Math.random() * matches.length);
        setRecommendation(matches[randomIndex]);
        
        toast({
          title: "Música recomendada",
          description: `Encontramos uma música perfeita para seu humor ${selectedMood}`,
          duration: 3000
        });
      } else {
        setRecommendation(null);
      }
    }
  }, [selectedMood, toast]);

  const togglePlay = (id: number) => {
    if (currentPlaying === id) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(id);
      
      toast({
        title: "Tocando música",
        description: "Enjoy the vibes! 🎵",
        duration: 2000
      });
    }
  };

  if (!selectedMood || !recommendation) {
    return (
      <Card className="border border-aura-text/10 dark:border-dark-text/10 bg-aura-dark-green/20 dark:bg-dark-dark-green/30 mt-6 transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Music size={18} />
            <span>Recomendação Musical</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-aura-text/80 dark:text-dark-text/80">
            Selecione seu humor para receber uma recomendação musical personalizada.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-aura-text/10 dark:border-dark-text/10 bg-aura-dark-green/20 dark:bg-dark-dark-green/30 mt-6 animate-fade-in transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Music size={18} />
          <span>Sua Recomendação Musical</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div 
            className="w-16 h-16 rounded-lg bg-cover bg-center mr-4 flex-shrink-0" 
            style={{ backgroundImage: `url(${recommendation.cover})` }}
          />
          <div className="flex-1">
            <h3 className="font-medium text-aura-off-white dark:text-dark-off-white">{recommendation.title}</h3>
            <p className="text-xs text-aura-off-white/70 dark:text-dark-off-white/70">{recommendation.artist}</p>
            <div className="flex items-center mt-2">
              <button 
                onClick={() => togglePlay(recommendation.id)}
                className="p-2 bg-aura-dark-green dark:bg-dark-dark-green text-aura-off-white dark:text-dark-off-white rounded-full mr-2 hover:bg-aura-dark-green/80 dark:hover:bg-dark-dark-green/80 transition-colors"
                aria-label={currentPlaying === recommendation.id ? "Pause" : "Play"}
              >
                {currentPlaying === recommendation.id ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <span className="text-xs text-aura-off-white/60 dark:text-dark-off-white/60">{recommendation.duration}</span>
              <button 
                className="p-2 ml-auto text-aura-off-white/70 dark:text-dark-off-white/70 hover:text-red-500 transition-colors"
                aria-label="Add to favorites"
              >
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
