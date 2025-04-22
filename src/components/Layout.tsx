
import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Activity, Heart, Settings, Trophy, LogOut, User } from "lucide-react";
import { useAuth } from "./AuthProvider";
import { useToast } from "@/hooks/use-toast";
import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  
  const navItems = [
    { path: "/", icon: Home, label: "Início" },
    { path: "/musicas", icon: Activity, label: "Treinos" },
    { path: "/reflexoes", icon: Trophy, label: "Conquistas" },
    { path: "/favoritos", icon: Heart, label: "Favoritos" },
    { path: "/configuracoes", icon: Settings, label: "Config" }
  ];

  const handleLogout = () => {
    toast({
      title: "Até breve!",
      description: "Continue com o bom trabalho, atleta!",
      duration: 3000,
    });
    logout();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 right-0 p-4 z-10 flex items-center space-x-2">
        <ThemeToggle />
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-aura-royal/30 hover:bg-aura-royal/50 text-aura-dark rounded-full px-3 py-1.5 text-sm dark:bg-dark-royal/30 dark:hover:bg-dark-royal/50 dark:text-dark-ice transition-colors"
        >
          <User size={16} />
          <span className="hidden md:inline">{user?.name || "Atleta"}</span>
          <LogOut size={16} />
        </button>
      </div>
      
      <main className="flex-1 pb-16 pt-16">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-aura-ice border-t border-aura-royal/10 px-2 py-1 dark:bg-dark-charcoal dark:border-dark-royal/10 transition-colors">
        <div className="flex justify-between max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center py-2 px-4 rounded-lg transition-colors ${
                  isActive 
                    ? "text-aura-royal dark:text-dark-lime" 
                    : "text-aura-dark/60 dark:text-dark-ice/60"
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
