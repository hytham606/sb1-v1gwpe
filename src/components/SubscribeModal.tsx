import { X } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-sb-dark w-full max-w-lg rounded-lg p-6 relative mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-sb-foreground/60" />
        </button>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-6 relative">
            <div className="w-16 h-16 rounded-full bg-blue-500 absolute -left-4 top-0 opacity-20" />
            <div className="w-12 h-12 rounded-full bg-purple-500 absolute -right-2 top-4 opacity-20" />
            <div className="w-14 h-14 rounded-full bg-red-500 absolute left-8 -top-2 opacity-20" />
          </div>
          
          <h2 className="text-2xl font-bold text-sb-foreground mb-4">
            Become an Early Subscriber
          </h2>
          <p className="text-sb-foreground/60">
            Join now Learnizmo's crowdfunding campaign and save your seat for a personalized and adaptive learning journey based on your experience and learning challenges.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://assisteva.com/learnizmo/#pay"
            className="block w-full py-2 px-4 bg-sb-green text-sb-darker font-medium rounded-lg text-center hover:bg-sb-green/90 transition-colors"
          >
            Early Subscribe
          </a>
          <a
            href="https://assisteva.com/learnizmo/"
            className="block w-full py-2 px-4 text-sb-foreground/80 hover:text-sb-green text-center transition-colors"
          >
            Join the waiting list
          </a>
        </div>
      </div>
    </div>
  );
}