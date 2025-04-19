
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useToast } from "@/hooks/use-toast";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

  const handleToggle = () => {
    toggleTheme();
    toast({
      title: theme === "light" ? "Modo escuro ativado" : "Modo claro ativado",
      description: theme === "light" 
        ? "Interface ajustada para ambientes com pouca luz." 
        : "Interface ajustada para ambientes iluminados.",
      duration: 3000,
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-aura-soft-beige/50 dark:bg-dark-soft-beige/50 text-aura-dark-green dark:text-dark-off-white transition-colors hover:bg-aura-soft-beige dark:hover:bg-dark-soft-beige/70"
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
