
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import MusicCard from "@/components/MusicCard";
import { useState, useEffect } from "react";

interface Music {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
  mood: string;
}

const musicData: Music[] = [
  {
    id: 1,
    title: "Manhã Tranquila",
    artist: "Natureza Sonora",
    duration: "3:45",
    cover: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=500",
    mood: "Calmo"
  },
  {
    id: 2,
    title: "Energia Vital",
    artist: "Vida Plena",
    duration: "4:20",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500",
    mood: "Energético"
  },
  {
    id: 3,
    title: "Pensamentos Profundos",
    artist: "Alma Contemplativa",
    duration: "5:10",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
    mood: "Reflexivo"
  },
  {
    id: 4,
    title: "Alívio Mental",
    artist: "Paz Interior",
    duration: "3:55",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500",
    mood: "Ansioso"
  },
  {
    id: 5,
    title: "Brisa da Manhã",
    artist: "Sons Naturais",
    duration: "4:32",
    cover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
    mood: "Calmo"
  },
  {
    id: 6,
    title: "Motivação Diária",
    artist: "Novo Dia",
    duration: "3:15",
    cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500",
    mood: "Energético"
  }
];

const Musicas = () => {
  const [filteredMusic, setFilteredMusic] = useState<Music[]>(musicData);
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filters = ["Todos", "Calmo", "Energético", "Reflexivo", "Ansioso"];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === "Todos") {
      setFilteredMusic(musicData);
    } else {
      setFilteredMusic(musicData.filter(music => music.mood === filter));
    }
  };

  return (
    <Layout>
      <div className="aura-container">
        <Header title="Músicas para você" />
        
        <div className="flex overflow-x-auto py-2 mb-4 -mx-4 px-4 scrollbar-none">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 rounded-full text-sm mr-2 whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? "bg-aura-dark-green text-aura-off-white"
                  : "bg-aura-soft-green text-aura-dark-green"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="mt-2">
          {filteredMusic.length > 0 ? (
            filteredMusic.map(music => (
              <MusicCard
                key={music.id}
                title={music.title}
                artist={music.artist}
                duration={music.duration}
                cover={music.cover}
                mood={music.mood}
              />
            ))
          ) : (
            <div className="text-center py-10 text-aura-dark-green/70">
              Nenhuma música encontrada para este humor.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Musicas;
