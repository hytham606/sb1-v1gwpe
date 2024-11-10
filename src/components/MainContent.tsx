import { Sparkles, Upload } from 'lucide-react';

interface MainContentProps {
  onModalOpen: () => void;
}

export default function MainContent({ onModalOpen }: MainContentProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onModalOpen();
  };

  return (
    <div className="flex-1 p-4 sm:p-8 overflow-y-auto flex items-center justify-center">
      <div className="max-w-2xl w-full relative">
        <div className="absolute inset-0 bg-gradient-radial from-sb-green/10 via-transparent to-transparent opacity-50 blur-3xl -z-10" />
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-sb-foreground">
            Start Learning now
          </h1>
          <p className="text-lg sm:text-xl text-sb-foreground/60 mb-8 sm:mb-12">
            Personalized lessons and courses specially for you
          </p>
          
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="I want to learn about..."
                className="w-full px-4 py-3 bg-sb-dark rounded-lg border border-sb-foreground/10 focus:outline-none focus:ring-1 focus:ring-sb-green text-sb-foreground placeholder-sb-foreground/40 text-base sm:text-lg transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sb-green text-sb-darker p-2 rounded-lg hover:bg-sb-green/90 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={onModalOpen} 
              className="px-4 py-2 border border-sb-foreground/10 rounded-lg text-sb-foreground hover:bg-sb-foreground/5 transition-colors flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Import
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}