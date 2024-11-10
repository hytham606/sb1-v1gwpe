import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ChatPanel from './components/ChatPanel';
import SubscribeModal from './components/SubscribeModal';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-sb-darker">
        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`absolute inset-y-0 left-0 transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <Sidebar 
              onClose={() => setIsMobileMenuOpen(false)} 
              onModalOpen={() => setIsSubscribeModalOpen(true)}
            />
          </div>
        </div>

        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar 
              onClose={() => {}} 
              onModalOpen={() => setIsSubscribeModalOpen(true)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-screen">
            <Header 
              onMenuClick={() => setIsMobileMenuOpen(true)}
              onModalOpen={() => setIsSubscribeModalOpen(true)}
            />
            <MainContent onModalOpen={() => setIsSubscribeModalOpen(true)} />
            <Footer />
          </div>
        </div>

        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed right-6 top-1/2 -translate-y-1/2 p-3 bg-sb-green text-sb-darker rounded-full shadow-lg hover:bg-sb-green/90 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        {/* Chat Panel */}
        <ChatPanel 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)}
          onModalOpen={() => setIsSubscribeModalOpen(true)}
        />

        {/* Subscribe Modal */}
        <SubscribeModal 
          isOpen={isSubscribeModalOpen} 
          onClose={() => setIsSubscribeModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;