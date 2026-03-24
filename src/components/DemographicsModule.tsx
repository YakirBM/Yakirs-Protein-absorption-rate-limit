import { motion } from 'motion/react';
import { Users, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const PROTEIN_NEEDS_DATA = [
  { name: 'יושבני', value: 0.8, min: 0.8, max: 0.8 },
  { name: 'סיבולת', value: 1.6, min: 1.4, max: 1.8 },
  { name: 'כוח', value: 1.8, min: 1.6, max: 2.0 },
  { name: 'משולב', value: 1.9, min: 1.6, max: 2.2 },
  { name: 'גירעון קלורי', value: 2.5, min: 2.0, max: 3.1 },
];

export default function DemographicsModule() {
  return (
    <div className="space-y-12 md:space-y-16 pb-10">
      {/* Header */}
      <header className="text-center space-y-4 md:space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-blue/10 text-accent-blue mb-2 md:mb-4">
          <Users className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">דמוגרפיה ונתונים</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          כיצד מין, גיל וסטטוס אימון משפיעים על דרישות החלבון של הגוף? ניתוח מבוסס ראיות של ההבדלים הפיזיולוגיים.
        </p>
      </header>

      {/* Section 1: Gender */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-accent-blue to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-accent-blue ml-3 md:ml-4">01.</span> הבדלים בין גברים לנשים
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              בעבר נהוג היה להניח שלגברים ולנשים צרכים תזונתיים שונים בתכלית, אך מחקרים עדכניים מראים תמונה שונה לחלוטין.
            </p>
            <p>
              כאשר בוחנים את הצורך בחלבון <strong className="text-white">ביחס למשקל הגוף</strong> (גרם חלבון לכל ק"ג), אין שוני פיזיולוגי או הבדל ביכולת הספיגה בין המינים.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 mt-4 md:mt-6">
              <h4 className="text-white font-bold mb-2 flex items-center">
                <CheckCircle2 className="w-5 h-5 ml-2 text-accent-green" />
                נקודת השבירה (Plateau)
              </h4>
              <p className="text-sm text-gray-400">
                במחקר על מתאמני סיבולת, "נקודת השבירה" שבה תוספת חלבון אינה תורמת עוד להתאוששות הייתה כמעט זהה:
              </p>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>גברים:</span> <span className="text-accent-blue">1.60 גרם / ק"ג</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>נשים:</span> <span className="text-accent-blue">1.61 גרם / ק"ג</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-2xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">ההבדל הוא אבסולוטי בלבד</h3>
              <p className="text-sm md:text-base text-gray-400">
                ההבדל היחיד נובע ממסת הגוף. לגברים יש בממוצע מסת גוף גדולה יותר, ולכן יצטרכו יותר חלבון במונחים של גרמים ביום, אך היחס פר ק"ג נשאר זהה.
              </p>
            </div>
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 ml-2 text-orange-500" />
                חריג: גירעון קלורי
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                כאשר נשים ספורטאיות נמצאות בגירעון קלורי, הדרישה לחלבון עולה משמעותית למניעת איבוד שריר, ויכולה להגיע ליותר מ-2.0 גרם לק"ג ביום.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Age */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-accent-green to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-accent-green ml-3 md:ml-4">02.</span> השפעת הגיל על ספיגה וניצול
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 md:space-y-8">
              <div className="relative">
                <div className="flex justify-between mb-2 text-xs md:text-sm font-medium">
                  <span className="text-gray-400">צעירים (מנה נדרשת להפעלת סינתזה)</span>
                  <span className="text-white">~20g</span>
                </div>
                <div className="h-3 md:h-4 bg-white/10 rounded-full overflow-hidden flex justify-end">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '50%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-accent-blue"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="flex justify-between mb-2 text-xs md:text-sm font-medium">
                  <span className="text-gray-400">מבוגרים (מנה נדרשת להפעלת סינתזה)</span>
                  <span className="text-white">~40g</span>
                </div>
                <div className="h-3 md:h-4 bg-white/10 rounded-full overflow-hidden flex justify-end">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-accent-green"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-white mb-2">תפקיד הלאוצין (Leucine)</h4>
              <p className="text-sm text-gray-400">
                חומצת אמינו זו מתפקדת כ"מתג הדלקה" לבניית שריר. מבוגרים זקוקים לכמות כפולה של לאוצין כדי להתגבר על התנגודת האנאבולית ולהניע את המנוע באותה עוצמה.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-base md:text-lg order-1 md:order-2">
            <p>
              בעוד שהבדלי המין זניחים, הגיל מהווה פקטור קריטי. ככל שאנו מתבגרים, הגוף מפתח מצב הנקרא <strong className="text-white">"תנגודת אנאבולית" (Anabolic Resistance)</strong>.
            </p>
            <p>
              משמעות הדבר היא ששרירי הגוף של מבוגרים הופכים לפחות רגישים לנוכחות חומצות אמינו בדם. כדי שגוף מבוגר יתחיל לבנות שריר ביעילות של אדם צעיר, הוא יזדקק למנה כפולה של חלבון איכותי בארוחה.
            </p>
            <p className="text-accent-green font-medium">
              הבשורה המעודדת: ביצוע פעילות גופנית קבועה משפר את הרגישות של השריר לחומצות אמינו למשך יממה שלמה.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Training Status with Chart */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500 to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-purple-500 ml-3 md:ml-4">03.</span> סטטוס אימון (המתאמן המשולב)
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-4xl">
          המתאמן המשולב (Hybrid Athlete) תוקף את הגוף משתי חזיתות: אימוני כוח קורעים סיבי שריר ודורשים חלבון לשיקום, בעוד אימוני ריצה מרוקנים גליקוגן וגורמים לגוף לפרק חלבון לאנרגיה.
        </p>

        {/* Chart */}
        <div className="mb-10 bg-[#0a0a0a] rounded-2xl p-4 md:p-6 border border-white/5">
          <h3 className="text-center text-gray-400 mb-6 font-medium">צריכת חלבון מומלצת ביום (גרם לכל ק"ג משקל גוף)</h3>
          <div className="h-[300px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PROTEIN_NEEDS_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                <YAxis stroke="#888" tick={{ fill: '#888' }} domain={[0, 3.5]} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#111] border border-white/10 p-3 rounded-lg shadow-xl" dir="rtl">
                          <p className="font-bold text-white mb-1">{data.name}</p>
                          <p className="text-accent-blue font-mono text-sm">ממוצע: {data.value} גרם/ק"ג</p>
                          <p className="text-gray-400 font-mono text-xs mt-1">טווח: {data.min} - {data.max} גרם/ק"ג</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {PROTEIN_NEEDS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'משולב' ? '#00F0FF' : '#4f46e5'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="py-3 md:py-4 px-4 md:px-6 font-medium">סטטוס אימון</th>
                <th className="py-3 md:py-4 px-4 md:px-6 font-medium">צריכה מומלצת (גרם/ק"ג)</th>
                <th className="py-3 md:py-4 px-4 md:px-6 font-medium">מטרה מרכזית</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-white">אדם יושבני (ללא אימון)</td>
                <td className="py-3 md:py-4 px-4 md:px-6 font-mono">0.8</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-sm">מניעת מחסור תזונתי, תחזוקה בסיסית</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-white">מתאמן סיבולת (ריצה)</td>
                <td className="py-3 md:py-4 px-4 md:px-6 font-mono">1.4 - 1.8</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-sm">פיצוי על חלבון שנשרף כאנרגיה</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-white">מתאמן כוח (משקולות)</td>
                <td className="py-3 md:py-4 px-4 md:px-6 font-mono">1.6 - 2.0</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-sm">בניית מסת שריר, תיקון נזק מיקרוסקופי</td>
              </tr>
              <tr className="border-b border-white/5 bg-accent-blue/5 hover:bg-accent-blue/10 transition-colors">
                <td className="py-3 md:py-4 px-4 md:px-6 font-bold text-accent-blue">מתאמן משולב (כוח + ריצה)</td>
                <td className="py-3 md:py-4 px-4 md:px-6 font-mono font-bold text-accent-blue" dir="ltr">1.6 - 2.2</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-sm font-medium">תמיכה כפולה: מניעת פירוק מהריצה ובנייה מהכוח</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-3 md:py-4 px-4 md:px-6 font-medium text-white">ספורטאי בגירעון קלורי</td>
                <td className="py-3 md:py-4 px-4 md:px-6 font-mono" dir="ltr">2.0 - 3.1</td>
                <td className="py-3 md:py-4 px-4 md:px-6 text-sm">שמירה אגרסיבית על השריר בתנאי מחסור</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
