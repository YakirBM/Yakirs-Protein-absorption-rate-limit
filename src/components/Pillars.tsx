import { motion } from 'motion/react';
import { Users, Clock, ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

interface PillarsProps {
  onSelectModule: (module: string) => void;
}

export default function Pillars({ onSelectModule }: PillarsProps) {
  const pillars = [
    {
      id: 'demographics',
      title: 'דמוגרפיה ונתונים',
      description: 'הבדלים אמפיריים בין מגדרים, גילאים וסטטוס אימון. האם נשים צריכות פחות חלבון? איך הגיל משפיע?',
      icon: Users,
      color: 'from-blue-500 to-accent-blue'
    },
    {
      id: 'timing',
      title: 'תזמון וחלוקה',
      description: 'האם יש "תקרת ספיגה" בארוחה אחת? מחקר ה-100 גרם, ומה קורה לעודפים?',
      icon: Clock,
      color: 'from-green-500 to-accent-green'
    },
    {
      id: 'quality',
      title: 'איכות ומקורות',
      description: 'ההבדלים בין חלבון מהחי לצומח, קצבי ספיגה (מי גבינה מול קזאין) ואפקט הארוחה המעורבת.',
      icon: ShieldCheck,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'safety',
      title: 'בטיחות ומיתוסים',
      description: 'האם עודף חלבון מסוכן לכליות? סקירת עמדות רשמיות של ארגוני בריאות והסבר על היפר-פילטרציה.',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'research',
      title: 'ספריית מחקרים',
      description: 'קריאה והורדה של קבצי ה-PDF המקוריים והמחקרים המלאים עליהם מבוסס המידע באתר.',
      icon: FileText,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="pillars" className="py-32 px-6 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">עמודי התווך של ספיגת חלבון</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            בחר מודול למידה כדי לצלול לעומק הנתונים המדעיים וההמלצות הפרקטיות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onSelectModule(pillar.id)}
              className="bg-dark-card border border-dark-border rounded-3xl p-8 cursor-pointer group hover:border-accent-blue/50 transition-colors relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">
                {pillar.description}
              </p>
              
              <div className="mt-8 flex items-center text-accent-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                התחל מודול
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
