
import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Music, Heart, Settings, MessageSquare, LogOut, User } from "lucide-react";
import { useAuth } from "./AuthProvider";
import { useToast } from "@/hooks/use-toast";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/musicas", icon: Music, label: "Músicas" },
    { path: "/reflexoes", icon: MessageSquare, label: "Reflexões" },
    { path: "/favoritos", icon: Heart, label: "Favoritos" },
    { path: "/configuracoes", icon: Settings, label: "Config" }
  ];

  const handleLogout = () => {
    toast({
      title: "Até breve!",
      description: "Esperamos ver você novamente em breve.",
      duration: 3000,
    });
    logout();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 right-0 p-4 z-10">
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-aura-dark-green/50 hover:bg-aura-dark-green/70 text-aura-text rounded-full px-3 py-1.5 text-sm"
        >
          <User size={16} />
          <span className="hidden md:inline">{user?.name || "Usuário"}</span>
          <LogOut size={16} />
        </button>
      </div>
      
      <main className="flex-1 pb-16 pt-16">
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
