
import { Play, Pause, Heart } from "lucide-react";
import { useState } from "react";

interface MusicCardProps {
  title: string;
  artist: string;
  duration: string;
  cover: string;
  mood: string;
}

export default function MusicCard({ title, artist, duration, cover, mood }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex items-center p-3 rounded-lg bg-aura-soft-green dark:bg-dark-soft-beige/20 mb-3 shadow-sm transition-colors">
      <div 
        className="w-14 h-14 rounded-lg bg-cover bg-center mr-3 flex-shrink-0" 
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div className="flex-1">
        <h3 className="font-medium text-aura-dark-green dark:text-dark-off-white">{title}</h3>
        <p className="text-xs text-aura-dark-green/70 dark:text-dark-off-white/70">{artist}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-aura-dark-green/60 dark:text-dark-off-white/60">{duration} • {mood}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button 
          onClick={toggleFavorite} 
          className="p-2 text-aura-dark-green/70 dark:text-dark-off-white/70 hover:text-red-500 transition-colors"
        >
          <Heart size={18} fill={isFavorite ? "#ef4444" : "none"} color={isFavorite ? "#ef4444" : "currentColor"} />
        </button>
        <button 
          onClick={togglePlay} 
          className="p-2 bg-aura-dark-green dark:bg-dark-dark-green text-white rounded-full ml-2"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </div>
  );
}
