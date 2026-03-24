import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, BookOpen, Activity, Clock, ShieldCheck, AlertTriangle } from 'lucide-react';

interface NavbarProps {
  activeModule: string | null;
  setActiveModule: (module: string | null) => void;
}

export default function Navbar({ activeModule, setActiveModule }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', title: 'ראשי', icon: Home, action: () => { setActiveModule(null); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'pillars', title: 'עמודי תווך', icon: BookOpen, action: () => { 
      setActiveModule(null); 
      setTimeout(() => {
        document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }},
    { id: 'demographics', title: 'דמוגרפיה ונתונים', icon: Activity, action: () => { setActiveModule('demographics'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'timing', title: 'תזמון וחלוקה', icon: Clock, action: () => { setActiveModule('timing'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'quality', title: 'איכות ומקורות', icon: ShieldCheck, action: () => { setActiveModule('quality'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { id: 'safety', title: 'בטיחות ומיתוסים', icon: AlertTriangle, action: () => { setActiveModule('safety'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`} dir="rtl">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => { setActiveModule(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
              פרוטאין
            </span>
            <span>מאסטר</span>
          </div>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
            aria-label="פתח תפריט"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#111111] border-l border-white/10 z-[70] shadow-2xl flex flex-col"
              dir="rtl"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <span className="text-xl font-bold">תפריט ניווט</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="סגור תפריט"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-3">
                {navItems.map((item) => {
                  const isActive = activeModule === item.id || (item.id === 'home' && !activeModule);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer text-right w-full ${
                        isActive 
                          ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20' 
                          : 'hover:bg-white/5 text-gray-300 hover:text-white border border-transparent'
                      }`}
                    >
                      <div className={`p-3 rounded-xl ${isActive ? 'bg-accent-blue/20' : 'bg-white/5'}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-lg">{item.title}</span>
                    </button>
                  );
                })}
              </div>
              
              <div className="p-6 border-t border-white/10 text-center text-sm text-gray-500">
                המדריך המלא לספיגת חלבון &copy; 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
