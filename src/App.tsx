import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import DemographicsModule from './components/DemographicsModule';
import TimingModule from './components/TimingModule';
import QualityModule from './components/QualityModule';
import SafetyModule from './components/SafetyModule';

const MODULES = [
  { id: 'demographics', title: 'דמוגרפיה ונתונים' },
  { id: 'timing', title: 'תזמון וחלוקה' },
  { id: 'quality', title: 'איכות ומקורות' },
  { id: 'safety', title: 'בטיחות ומיתוסים' }
];

export default function App() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const currentIndex = MODULES.findIndex(m => m.id === activeModule);
  const prevModule = currentIndex > 0 ? MODULES[currentIndex - 1] : null;
  const nextModule = currentIndex < MODULES.length - 1 && currentIndex !== -1 ? MODULES[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-accent-blue selection:text-black overflow-x-hidden">
      <Navbar activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <AnimatePresence mode="wait">
        {!activeModule ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Pillars onSelectModule={setActiveModule} />
          </motion.div>
        ) : (
          <motion.div
            key={`module-${activeModule}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 pt-32 md:pt-32"
          >
            <button
              onClick={() => setActiveModule(null)}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              חזרה למסך הראשי
            </button>
            
            {activeModule === 'demographics' && <DemographicsModule />}
            {activeModule === 'timing' && <TimingModule />}
            {activeModule === 'quality' && <QualityModule />}
            {activeModule === 'safety' && <SafetyModule />}

            {/* Navigation Buttons */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              {prevModule ? (
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setActiveModule(prevModule.id);
                  }}
                  className="flex items-center px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                  <div className="text-right">
                    <div className="text-xs text-gray-400">הקודם</div>
                    <div className="font-bold">{prevModule.title}</div>
                  </div>
                </button>
              ) : <div className="hidden sm:block" />}

              {nextModule && (
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setActiveModule(nextModule.id);
                  }}
                  className="flex items-center px-6 py-3 rounded-full bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue transition-colors w-full sm:w-auto justify-center cursor-pointer"
                >
                  <div className="text-left">
                    <div className="text-xs opacity-70">הבא</div>
                    <div className="font-bold">{nextModule.title}</div>
                  </div>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
