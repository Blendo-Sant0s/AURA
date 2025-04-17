
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-aura-off-white p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-aura-dark-green mb-4">Página não encontrada</h1>
        <p className="text-lg text-aura-dark-green/70 mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link 
          to="/" 
          className="aura-button inline-flex items-center"
        >
          <Home size={18} className="mr-2" />
          Voltar para início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
