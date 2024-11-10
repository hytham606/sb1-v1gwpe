import { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onModalOpen: () => void;
}

export default function ChatPanel({ isOpen, onClose, onModalOpen }: ChatPanelProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onModalOpen();
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`fixed right-0 top-0 bottom-0 w-[400px] glass-effect transform transition-transform duration-300 z-20 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-white/[0.04] flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-sb-green" />
            <span className="font-medium text-sb-foreground">AI Assistant</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-sb-foreground/60" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div className="bg-white/[0.04] rounded-lg p-3">
              <p className="text-sb-foreground/80">
                Hi! I'm your AI learning assistant. How can I help you today?
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-white/[0.04]">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
              className="w-full px-4 py-2 bg-white/[0.04] rounded-lg focus:outline-none focus:ring-1 focus:ring-sb-green/50 text-sb-foreground placeholder-sb-foreground/40"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-white/[0.04] rounded-lg transition-colors"
            >
              <Send className="w-4 h-4 text-sb-green" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}