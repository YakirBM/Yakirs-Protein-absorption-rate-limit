import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-sm font-medium tracking-wide">
          קורס למידה מתקדם
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
          המדע של <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
            ספיגת חלבון
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          מחקר מעמיק על ניצול מטבולי, אופטימיזציה תזונתית והגבולות האמיתיים של הגוף האנושי.
        </p>
        
        <motion.button
          onClick={() => {
            document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_30px_rgba(0,240,255,0.3)] cursor-pointer"
        >
          התחל ללמוד
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 text-gray-500"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
