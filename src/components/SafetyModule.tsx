import { motion } from 'motion/react';
import { AlertTriangle, HeartPulse, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

const SAFETY_RANGES_DATA = [
  { name: 'המלצה בסיסית', min: 0, max: 0.8, range: [0, 0.8], fill: '#6b7280' },
  { name: 'טווח ספורטאים', min: 0.8, max: 2.2, range: [0.8, 2.2], fill: '#00F0FF' },
  { name: 'גירעון קלורי', min: 2.2, max: 3.1, range: [2.2, 3.1], fill: '#A855F7' },
  { name: 'נבדק כבטוח', min: 3.1, max: 4.4, range: [3.1, 4.4], fill: '#10B981' },
];

export default function SafetyModule() {
  return (
    <div className="space-y-12 md:space-y-16 pb-10">
      {/* Header */}
      <header className="text-center space-y-4 md:space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/10 text-red-500 mb-2 md:mb-4">
          <AlertTriangle className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">מיתוסים ובטיחות כליות</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          האם דיאטה עתירת חלבון גורמת לעומס מסוכן על הכליות? סקירת העמדות הרשמיות של ארגוני הבריאות והספורט המובילים בעולם.
        </p>
      </header>

      {/* Section 1: The Kidney Myth */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-red-500 to-transparent" />
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">האם כמות גבוהה מסוכנת?</h2>
            <p>
              פעמים רבות מושמעת הטענה שדיאטה עתירת חלבון גורמת לעומס מסוכן על הכליות. המדע מפריד באופן מוחלט בין <strong className="text-white">אנשים החולים במחלות כליה</strong>, לבין <strong className="text-white">מתאמנים בריאים</strong>.
            </p>
            <p>
              גופים רשמיים, ובראשם האגודה הבינלאומית לתזונת ספורט (ISSN), קבעו נחרצות שצריכת חלבון בטווחים של 1.4 עד 2.0 גרם לק"ג – <strong className="text-white">ואפילו הרבה מעבר לכך</strong> – היא בטוחה לחלוטין ואינה גורמת לשום נזק לתפקוד הכלייתי או למבנה העצמות אצל אנשים בריאים ופעילים.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="flex items-center mb-4 md:mb-6">
              <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-red-500 ml-3 md:ml-4 shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-white">היפר-פילטרציה (Hyperfiltration)</h3>
            </div>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">
              מחקרים קליניים עקבו אחר מתאמנים שצרכו כמויות חלבון קיצוניות (2.5 עד 3.3 גרם לק"ג, ולעיתים מעל 4 גרם לק"ג ביום) למשך יותר משנה.
            </p>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-green ml-3 shrink-0 mt-0.5" />
                <span className="text-gray-300">אין כל שינוי שלילי במדדי תפקוד הכליות (GFR), בלחץ הדם או בפרופיל השומנים.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-green ml-3 shrink-0 mt-0.5" />
                <span className="text-gray-300">הכליות אכן עובדות קשה יותר כדי לסנן את החלבון, אך עבור כליה בריאה מדובר ב<strong className="text-white">הסתגלות פיזיולוגית תקינה לחלוטין</strong> ולא בפגיעה או נזק מצטבר.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Safe Ranges Chart */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-accent-green to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-accent-green ml-3 md:ml-4">02.</span> טווחי צריכה בטוחים (גרם/ק"ג)
        </h2>
        
        <div className="bg-[#0a0a0a] rounded-3xl p-4 md:p-8 border border-white/5 mb-6">
          <div className="h-[250px] md:h-[300px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SAFETY_RANGES_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#888" tick={{ fill: '#888' }} domain={[0, 5]} />
                <YAxis dataKey="name" type="category" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} width={90} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#111] border border-white/10 p-3 rounded-lg shadow-xl" dir="rtl">
                          <p className="font-bold text-white mb-1">{data.name}</p>
                          <p className="text-accent-green font-mono text-sm">טווח: {data.min} - {data.max} גרם/ק"ג</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine x={4.4} stroke="#EF4444" strokeDasharray="3 3" label={{ position: 'top', value: 'נבדק קלינית', fill: '#EF4444', fontSize: 12 }} />
                <Bar dataKey="range" radius={[0, 4, 4, 0]} barSize={24}>
                  {
                    SAFETY_RANGES_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-400 text-center">
          * מחקרים הראו שצריכה של עד 4.4 גרם חלבון לכל ק"ג משקל גוף ביום אינה גורמת לנזק כלייתי באנשים בריאים.
        </p>
      </section>

      {/* Section 3: Long term recommendations */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 to-transparent" />
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
          <span className="text-orange-500 ml-3">03.</span> המלצה לטווח הארוך
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl">
          כדי לשמור על בריאות מיטבית לאורך שנים, מומלץ <strong className="text-white">לגוון את מקורות החלבון</strong>. הישענות מוחלטת על כמויות אדירות של בשר אדום בלבד עשויה לייצר תהליכים דלקתיים מסוימים במעי בטווח הארוך. לכן, שילוב של עופות, דגים, מוצרי חלב וחלבון צמחי הוא הדרך הנכונה והבטוחה ביותר לאדם הבריא להתמיד בתזונת ספורט עתירת חלבון.
        </p>
      </section>
    </div>
  );
}
