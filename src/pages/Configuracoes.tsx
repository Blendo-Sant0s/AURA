
import { useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { 
  Bell, Moon, Sun, User, Heart, Shield, HelpCircle, 
  LogOut, ChevronRight 
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Configuracoes = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout>
      <div className="aura-container">
        <Header title="Configurações" />
        
        <div className="mt-4">
          <div className="p-4 bg-aura-royal/5 dark:bg-dark-royal/5 rounded-xl mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-aura-royal/20 dark:bg-dark-royal/20 flex items-center justify-center">
                <User size={24} className="text-aura-royal dark:text-dark-ice" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-aura-dark dark:text-dark-ice">Usuário</h3>
                <p className="text-xs text-aura-dark/70 dark:text-dark-ice/70">usuario@email.com</p>
              </div>
              <button className="ml-auto text-xs underline text-aura-royal dark:text-dark-ice/80">
                Editar
              </button>
            </div>
          </div>
          
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-medium text-aura-dark/90 dark:text-dark-ice/90 mb-3">Preferências</h3>
              
              <div className="space-y-2">
                <div className="p-3 bg-aura-royal/5 dark:bg-dark-royal/5 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell size={18} className="text-aura-royal dark:text-dark-ice" />
                    <span className="ml-3 text-aura-dark dark:text-dark-ice">Notificações</span>
                  </div>
                  <Switch 
                    checked={notifications} 
                    onCheckedChange={setNotifications} 
                    className="data-[state=checked]:bg-aura-royal" 
                  />
                </div>
                
                <div className="p-3 bg-aura-royal/5 dark:bg-dark-royal/5 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    {darkMode ? (
                      <Moon size={18} className="text-aura-royal dark:text-dark-ice" />
                    ) : (
                      <Sun size={18} className="text-aura-royal dark:text-dark-ice" />
                    )}
                    <span className="ml-3 text-aura-dark dark:text-dark-ice">Modo escuro</span>
                  </div>
                  <Switch 
                    checked={darkMode} 
                    onCheckedChange={setDarkMode} 
                    className="data-[state=checked]:bg-aura-royal" 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-aura-dark/90 dark:text-dark-ice/90 mb-3">Suporte</h3>
              
              <div className="space-y-2">
                <button className="p-3 bg-aura-royal/5 dark:bg-dark-royal/5 rounded-lg flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <HelpCircle size={18} className="text-aura-royal dark:text-dark-ice" />
                    <span className="ml-3 text-aura-dark dark:text-dark-ice">Ajuda e suporte</span>
                  </div>
                  <ChevronRight size={18} className="text-aura-dark/60 dark:text-dark-ice/60" />
                </button>
                
                <button className="p-3 bg-aura-royal/5 dark:bg-dark-royal/5 rounded-lg flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <Shield size={18} className="text-aura-royal dark:text-dark-ice" />
                    <span className="ml-3 text-aura-dark dark:text-dark-ice">Política de privacidade</span>
                  </div>
                  <ChevronRight size={18} className="text-aura-dark/60 dark:text-dark-ice/60" />
                </button>
                
                <button className="p-3 bg-aura-royal/5 dark:bg-dark-royal/5 rounded-lg flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <Heart size={18} className="text-aura-royal dark:text-dark-ice" />
                    <span className="ml-3 text-aura-dark dark:text-dark-ice">Sobre Aura</span>
                  </div>
                  <ChevronRight size={18} className="text-aura-dark/60 dark:text-dark-ice/60" />
                </button>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="p-3 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center w-full">
                <LogOut size={18} className="mr-2" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Configuracoes;
