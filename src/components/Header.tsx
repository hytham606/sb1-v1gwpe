import { ChevronLeft, ChevronRight, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onModalOpen: () => void;
}

export default function Header({ onMenuClick, onModalOpen }: HeaderProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onModalOpen();
    }
  };

  return (
    <div className="glass-effect px-4 py-2 flex items-center space-x-4 sticky top-0 z-30">
      <div className="flex items-center space-x-2">
        <button 
          className="lg:hidden p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5 text-sb-foreground/60" />
        </button>
        <button className="hidden sm:block p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors opacity-50 cursor-not-allowed">
          <ChevronLeft className="w-5 h-5 text-sb-foreground/60" />
        </button>
        <button className="hidden sm:block p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors opacity-50 cursor-not-allowed">
          <ChevronRight className="w-5 h-5 text-sb-foreground/60" />
        </button>
      </div>
      
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="w-5 h-5 text-sb-foreground/40 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-2 bg-white/[0.04] rounded-lg focus:outline-none focus:ring-1 focus:ring-sb-green/50 text-sb-foreground placeholder-sb-foreground/40 transition-all"
          />
        </div>
      </div>
    </div>
  );
}