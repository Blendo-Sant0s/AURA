
import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  showNotification?: boolean;
}

export default function Header({ title, showNotification = false }: HeaderProps) {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('pt-BR', options);
  
  return (
    <div className="py-4 px-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium text-aura-dark-green">{title}</h1>
          <p className="text-xs text-aura-dark-green/70 capitalize">{formattedDate}</p>
        </div>
        {showNotification && (
          <button className="p-2 rounded-full bg-aura-soft-beige">
            <Bell size={20} className="text-aura-dark-green" />
          </button>
        )}
      </div>
    </div>
  );
}
