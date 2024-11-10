import { Rocket, Upload, Compass, User, Bookmark, Settings, X } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
  onModalOpen: () => void;
}

export default function Sidebar({ onClose, onModalOpen }: SidebarProps) {
  return (
    <div className="w-[280px] h-screen glass-effect p-4 flex flex-col">
      <div className="flex justify-between items-center lg:hidden mb-4">
        <span className="text-sb-foreground/80 font-medium">Menu</span>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-sb-foreground/60" />
        </button>
      </div>

      <div className="space-y-6 overflow-y-auto flex-1">
        <div className="space-y-1">
          <button 
            onClick={onModalOpen}
            className="flex items-center text-sb-green font-medium hover:bg-white/[0.04] px-3 py-2 rounded-lg w-full transition-colors group"
          >
            <Rocket className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-sb-green/80" />
            <span className="truncate group-hover:text-sb-green/80">New Course</span>
          </button>
          <button 
            onClick={onModalOpen}
            className="flex items-center text-sb-foreground/80 hover:bg-white/[0.04] px-3 py-2 rounded-lg w-full transition-colors group"
          >
            <Upload className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-sb-green" />
            <span className="truncate group-hover:text-sb-foreground">Import Course</span>
          </button>
          <button 
            onClick={onModalOpen}
            className="flex items-center text-sb-foreground/80 hover:bg-white/[0.04] px-3 py-2 rounded-lg w-full transition-colors group"
          >
            <Compass className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-sb-green" />
            <span className="truncate group-hover:text-sb-foreground">Explore Courses</span>
          </button>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-sb-foreground/40 px-3 mb-2">Recents</h3>
          <p className="text-sb-foreground/60 px-3">No courses, yet.</p>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-white/[0.04] space-y-1">
        <button 
          onClick={onModalOpen}
          className="flex items-center text-sb-foreground/80 hover:bg-white/[0.04] px-3 py-2 rounded-lg w-full transition-colors group"
        >
          <User className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-sb-green" />
          <span className="truncate">Account</span>
        </button>
        <button 
          onClick={onModalOpen}
          className="flex items-center text-sb-foreground/80 hover:bg-white/[0.04] px-3 py-2 rounded-lg w-full transition-colors group"
        >
          <Bookmark className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-sb-green" />
          <span className="truncate">Highlights</span>
        </button>
        <button 
          onClick={onModalOpen}
          className="flex items-center text-sb-foreground/80 hover:bg-white/[0.04] px-3 py-2 rounded-lg w-full transition-colors group"
        >
          <Settings className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-sb-green" />
          <span className="truncate">Settings & Accessibility</span>
        </button>
      </div>
    </div>
  );
}