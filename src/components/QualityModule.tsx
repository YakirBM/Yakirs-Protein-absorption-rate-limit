import { motion } from 'motion/react';
import { ShieldCheck, Dna, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ABSORPTION_RATES_DATA = [
  { name: 'מי גבינה', rate: 15, fill: '#00F0FF' }, // Average of 10-20
  { name: 'צומח', rate: 5.5, fill: '#00FF00' }, // Average of 4-7
  { name: 'בשר', rate: 4.5, fill: '#EF4444' }, // Average of 2-7
  { name: 'קזאין', rate: 3.5, fill: '#A855F7' }, // Average of 3-4
  { name: 'ביצה', rate: 3, fill: '#EAB308' }, // ~3
];

export default function QualityModule() {
  const proteinSources = [
    {
      name: 'חלבון מי גבינה (Whey Isolate)',
      rate: '10 עד 20 גרם בשעה',
      time: '1 עד 2 שעות',
      notes: 'נספג במהירות שיא. איכותי מאוד ומצית במהירות את תהליך בניית השריר.',
      color: 'border-accent-blue'
    },
    {
      name: 'חלבון קזאין (Casein)',
      rate: '3 עד 4 גרם בשעה',
      time: '6 עד 7 שעות',
      notes: 'הופך לג\'ל בקיבה, משחרר אבני בניין בטפטוף איטי וארוך טווח.',
      color: 'border-purple-500'
    },
    {
      name: 'חלבון ביצה (מבושלת)',
      rate: 'כ-3 גרם בשעה',
      time: '6 עד 7 שעות',
      notes: 'חלבון בעל זמינות ביולוגית גבוהה ביותר, עיכול איטי ויציב. (ביצים חיות נספגות גרוע).',
      color: 'border-yellow-500'
    },
    {
      name: 'בשר ועופות (חזה עוף, בקר)',
      rate: '2 עד 7 גרם בשעה',
      time: '3 עד 10 שעות',
      notes: 'העיכול משתנה מאוד ותלוי בכמות השומן שמתלווה לבשר המאטה את הקיבה.',
      color: 'border-red-500'
    },
    {
      name: 'חלבון מן הצומח (סויה, אפונה)',
      rate: '4 עד 7 גרם בשעה',
      time: '2 עד 5 שעות',
      notes: 'לעיתים מצריך שילוב של סוגים שונים או מנות מעט גדולות יותר כדי להגיע לפרופיל מושלם.',
      color: 'border-accent-green'
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-10">
      {/* Header */}
      <header className="text-center space-y-4 md:space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500/10 text-purple-500 mb-2 md:mb-4">
          <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">איכות ומקורות חלבון</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          מה ההבדל בין חלבון מהחי לצומח? כמה מהר נספג כל סוג חלבון, ואיך "אפקט הארוחה המעורבת" משנה את כל התמונה?
        </p>
      </header>

      {/* Section 1: Quality Metrics & Leucine */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500 to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-purple-500 ml-3 md:ml-4">01.</span> מדדי איכות (DIAAS / PDCAAS)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              איכות החלבון נמדדת על ידי רמת הזמינות הביולוגית שלו והרכב חומצות האמינו. ארגוני תקינה (כמו ה-FAO של האו"ם) משתמשים במדדים כמו <strong className="text-white">PDCAAS</strong> ויותר ויותר ב-<strong className="text-white">DIAAS</strong> כדי להעריך איכות חלבון.
            </p>
            <p>
              מקור חלבון יכול להיות "נספג" היטב ועדיין להיות פחות יעיל לבניית שריר אם חסרות בו חומצות אמינו חיוניות מסוימות, או אם הוא דל ב<strong className="text-white">לאוצין (Leucine)</strong>.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 mt-4 md:mt-6">
              <h4 className="text-white font-bold mb-2 flex items-center">
                <Dna className="w-5 h-5 ml-2 text-purple-400" />
                חי מול צומח
              </h4>
              <p className="text-sm text-gray-400">
                חלבונים מן החי נחשבים ל"סטנדרט הזהב" (95%-100% ניצול). חלבונים צמחיים מתאפיינים בזמינות ביולוגית מעט נמוכה יותר (70%-90%) בשל סיבים תזונתיים המעכבים ספיגה. 
                <br /><br />
                <strong className="text-white">הפתרון:</strong> שילוב מקורות צמחיים (אורז ואפונה) או פשוט הגדלת המנה הצמחית במעט מפצה לחלוטין על פערי הספיגה, ומייצרת בניית שריר זהה לחלוטין לחלבון מהחי.
              </p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            {/* Abstract representation of amino acids */}
            <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-purple-500/10 to-transparent rounded-full border border-purple-500/20 flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-4xl font-black text-white">Leucine</div>
                <p className="text-purple-400 font-medium">"מתג ההדלקה" של השריר</p>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">
                  ככל שהחלבון עשיר יותר בלאוצין (כמו מי גבינה), כך הוא נחשב לאיכותי ויעיל יותר בהתנעת תהליך ה-MPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Absorption Rates Table & Chart */}
      <section className="space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-accent-blue ml-3 md:ml-4">02.</span> קצבי ספיגה פיזיקליים
        </h2>

        {/* Chart */}
        <div className="bg-[#0a0a0a] rounded-3xl p-4 md:p-8 border border-white/5 mb-8">
          <h3 className="text-center text-gray-400 mb-6 font-medium">קצב ספיגה ממוצע (גרם בשעה)</h3>
          <div className="h-[250px] md:h-[300px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ABSORPTION_RATES_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#888" tick={{ fill: '#888' }} domain={[0, 20]} />
                <YAxis dataKey="name" type="category" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} width={80} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#111] border border-white/10 p-3 rounded-lg shadow-xl" dir="rtl">
                          <p className="font-bold text-white mb-1">{data.name}</p>
                          <p className="text-accent-blue font-mono text-sm">~{data.rate} גרם בשעה</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="rate" radius={[0, 4, 4, 0]} barSize={24}>
                  {ABSORPTION_RATES_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {proteinSources.map((source, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-dark-card border-t-4 ${source.color} border-x border-b border-dark-border rounded-2xl p-6 shadow-lg`}
            >
              <h3 className="text-xl font-bold text-white mb-4">{source.name}</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">קצב ספיגה:</span>
                  <span className="text-white font-mono" dir="ltr">{source.rate}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">זמן עיכול מלא:</span>
                  <span className="text-white font-mono" dir="ltr">{source.time}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {source.notes}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Mixed Meal Effect */}
      <section className="bg-accent-blue/5 border border-accent-blue/20 rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start">
          <Info className="w-8 h-8 md:w-10 md:h-10 text-accent-blue ml-0 md:ml-4 mb-4 md:mb-0 shrink-0 mt-1" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">נקודה קריטית: אפקט הארוחה המעורבת</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              הנתונים על קצבי הספיגה המהירים (כמו מי גבינה שנספג תוך שעה-שעתיים) נכונים למצב שבו צורכים את החלבון <strong className="text-white">לבדו, על קיבה ריקה</strong>. 
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4">
              במציאות, אנו לרוב אוכלים "ארוחות מעורבות" (חלבון יחד עם פחמימות, שומנים וסיבים). כאשר חלבון מעורבב עם אבות מזון אחרים, כל תהליך העיכול בקיבה <strong className="text-white">מאט בצורה דרמטית</strong>. כתוצאה מכך, אפילו חלבון מהיר מאוד כמו מי גבינה, אם ישתה יחד עם ארוחה מלאה, ייספג לאט ובהדרגה בדיוק כמו מזונות אחרים.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
