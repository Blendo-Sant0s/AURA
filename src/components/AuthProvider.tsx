
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface User {
  name: string;
  email?: string;
  isAnonymous?: boolean;
  provider?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAnonymous: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Verificar se existe usuário no localStorage
    const storedUser = localStorage.getItem("auraUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (location.pathname !== "/login") {
      // Redirecionar para login se não estiver autenticado e não estiver na página de login
      navigate("/login");
    }
  }, [navigate, location.pathname]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("auraUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auraUser");
    toast({
      title: "Logout realizado",
      description: "Você saiu da sua conta. Até breve!",
    });
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAnonymous: user?.isAnonymous || false,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
