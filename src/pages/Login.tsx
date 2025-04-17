
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, User, UserRound, LogIn } from "lucide-react";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLoginAnonymous = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulação de login anônimo
      localStorage.setItem("auraUser", JSON.stringify({ name: "Visitante", isAnonymous: true }));
      toast({
        title: "Bem-vindo!",
        description: "Você entrou como visitante. Aproveite a experiência Aura!",
      });
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  const handleLoginSocial = (provider: string) => {
    setLoading(true);
    // Simulação de login social
    setTimeout(() => {
      localStorage.setItem("auraUser", JSON.stringify({ 
        name: provider === "google" ? "Usuário Google" : "Usuário Facebook", 
        provider 
      }));
      toast({
        title: "Login realizado com sucesso!",
        description: `Bem-vindo de volta via ${provider === "google" ? "Google" : "Facebook"}!`,
      });
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de login/cadastro
    setTimeout(() => {
      localStorage.setItem("auraUser", JSON.stringify({ 
        name: isLogin ? "Usuário" : "Novo Usuário", 
        email: "usuario@exemplo.com" 
      }));
      toast({
        title: isLogin ? "Login realizado com sucesso!" : "Conta criada com sucesso!",
        description: isLogin ? "Bem-vindo de volta!" : "Sua jornada Aura começa agora!",
      });
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-aura-soft-green px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-aura-off-white mb-2">Aura</h1>
          <p className="text-aura-text/80">Seu espaço de bem-estar e motivação</p>
        </div>

        <div className="bg-aura-dark-green/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-aura-text/10 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 rounded-md transition-all ${
                  isLogin ? "bg-aura-dark-green text-aura-off-white" : "text-aura-text/70"
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 rounded-md transition-all ${
                  !isLogin ? "bg-aura-dark-green text-aura-off-white" : "text-aura-text/70"
                }`}
              >
                Cadastrar
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-aura-text/80">
                  Nome
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    className="pl-10 bg-aura-soft-beige border-aura-text/10 text-aura-off-white"
                    required={!isLogin}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-aura-text/50" size={16} />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-aura-text/80">
                Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="pl-10 bg-aura-soft-beige border-aura-text/10 text-aura-off-white"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-aura-text/50" size={16} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-aura-text/80">
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  className="pl-10 bg-aura-soft-beige border-aura-text/10 text-aura-off-white"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-aura-text/50" size={16} />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-aura-dark-green hover:bg-aura-dark-green/80 text-aura-off-white"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-aura-off-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn className="mr-2" size={18} />
                  {isLogin ? "Entrar" : "Criar conta"}
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-aura-text/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 text-aura-text/60 bg-aura-dark-green/40">Ou continue com</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button
                type="button"
                onClick={() => handleLoginSocial("google")}
                className="bg-transparent hover:bg-aura-soft-beige text-aura-text border border-aura-text/20"
                disabled={loading}
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Google
              </Button>
              <Button
                type="button"
                onClick={() => handleLoginSocial("facebook")}
                className="bg-transparent hover:bg-aura-soft-beige text-aura-text border border-aura-text/20"
                disabled={loading}
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
                Facebook
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              type="button"
              onClick={handleLoginAnonymous}
              variant="ghost"
              className="text-aura-text/70 hover:text-aura-text hover:bg-transparent"
              disabled={loading}
            >
              <UserRound className="mr-2" size={16} />
              Entrar como visitante
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
