
import { useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import MusicCard from "@/components/MusicCard";
import Quote from "@/components/Quote";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Quote as QuoteIcon } from "lucide-react";

const Favoritos = () => {
  const [activeTab, setActiveTab] = useState("musicas");

  const favoriteMusic = [
    {
      id: 1,
      title: "Manhã Tranquila",
      artist: "Natureza Sonora",
      duration: "3:45",
      cover: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=500",
      mood: "Calmo"
    },
    {
      id: 3,
      title: "Pensamentos Profundos",
      artist: "Alma Contemplativa",
      duration: "5:10",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
      mood: "Reflexivo"
    }
  ];

  return (
    <Layout>
      <div className="aura-container">
        <Header title="Seus favoritos" />
        
        <Tabs defaultValue="musicas" className="mt-4">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="musicas" className="flex items-center gap-2">
              <Music size={16} />
              <span>Músicas</span>
            </TabsTrigger>
            <TabsTrigger value="frases" className="flex items-center gap-2">
              <QuoteIcon size={16} />
              <span>Frases</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="musicas" className="mt-4">
            {favoriteMusic.length > 0 ? (
              favoriteMusic.map(music => (
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
                Você ainda não favoritou nenhuma música.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="frases" className="mt-4">
            <Quote className="mb-4" />
            <Quote />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Favoritos;
