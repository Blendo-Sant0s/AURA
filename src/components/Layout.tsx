
import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Music, Heart, Settings, MessageSquare } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/musicas", icon: Music, label: "Músicas" },
    { path: "/reflexoes", icon: MessageSquare, label: "Reflexões" },
    { path: "/favoritos", icon: Heart, label: "Favoritos" },
    { path: "/configuracoes", icon: Settings, label: "Config" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-16">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-aura-soft-green border-t border-aura-dark-green/10 px-2 py-1">
        <div className="flex justify-between max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center py-2 px-4 rounded-lg transition-colors ${
                  isActive ? "text-aura-dark-green" : "text-aura-dark-green/60"
                }`}
              >
                <item.icon size={20} className={isActive ? "animate-pulse-gentle" : ""} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
