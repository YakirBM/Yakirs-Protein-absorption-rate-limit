import { motion } from 'motion/react';
import { Clock, Activity, TrendingUp, Moon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ABSORPTION_DATA = [
  { hour: '0h', '25g': 0, '100g': 0 },
  { hour: '2h', '25g': 100, '100g': 110 },
  { hour: '4h', '25g': 20, '100g': 95 },
  { hour: '6h', '25g': 5, '100g': 85 },
  { hour: '8h', '25g': 0, '100g': 75 },
  { hour: '10h', '25g': 0, '100g': 60 },
  { hour: '12h', '25g': 0, '100g': 45 },
];

export default function TimingModule() {
  return (
    <div className="space-y-12 md:space-y-16 pb-10">
      {/* Header */}
      <header className="text-center space-y-4 md:space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-green/10 text-accent-green mb-2 md:mb-4">
          <Clock className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">תזמון, חלוקה ומיתוס ה"תקרה"</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          האם הגוף באמת יכול לספוג רק 25 גרם חלבון בארוחה? מה קורה כשאוכלים 100 גרם במכה אחת? כל התשובות המדעיות.
        </p>
      </header>

      {/* Section 1: Absorption vs Synthesis */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-accent-green to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-accent-green ml-3 md:ml-4">01.</span> ספיגה מול ניצול (Absorption vs. MPS)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-accent-blue ml-3 shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-white">ספיגה במערכת העיכול</h3>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              במובן הפשוט של עיכול וספיגה במעי — <strong className="text-white">אין "תקרת ספיגה" קשיחה</strong>. מערכת העיכול מפרקת חלבון לחומצות אמינו והמעי הדק מצויד במנגנוני ספיגה בעלי קיבולת גבוהה מאוד (High Capacity). הגוף כמעט ואינו "זורק" חומרי הזנה החוצה. הטענה כי חלבון "לא נספג" היא שגויה מיסודה.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-500 ml-3 shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-white">ניצול לבניית שריר (MPS)</h3>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              כאן קיים הבדל קריטי: במובן של בניית שריר באופן מיטבי בכל ארוחה, יש <strong className="text-white">תקרת אפקט</strong>. אחרי כמות מסוימת בארוחה אחת (סביב 20-40 גרם), העלייה בסינתזת חלבון שריר מגיעה לרוויה. חלבון נוסף יופנה לתהליכים אחרים בגוף (שיקום רקמות, ייצור אוראה) ולא בהכרח יגדיל את בניית השריר באותו רגע.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The 100g Study with Chart */}
      <section className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-accent-blue to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center">
          <span className="text-accent-blue ml-3 md:ml-4">02.</span> פריצת הדרך: מחקר ה-100 גרם (2023)
        </h2>
        
        <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
          <p>
            במשך שנים, המיתוס הרווח קבע כי הגוף מסוגל לנצל רק כ-20 עד 25 גרם חלבון בארוחה ("אפקט השריר המלא"). מתאמנים פצלו ארוחות ל-6 מנות קטנות ביום מתוך חרדה שחלבון "יתבזבז".
          </p>
          
          {/* Chart */}
          <div className="my-8 bg-[#0a0a0a] rounded-2xl p-4 md:p-6 border border-white/5">
            <h3 className="text-center text-gray-400 mb-2 font-medium">שחרור חומצות אמינו וסינתזת שריר לאורך זמן</h3>
            <div className="flex justify-center gap-6 mb-6 text-sm">
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-accent-blue mr-2 ml-2"></div> 100 גרם חלבון</div>
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-gray-500 mr-2 ml-2"></div> 25 גרם חלבון</div>
            </div>
            <div className="h-[250px] md:h-[300px] w-full" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ABSORPTION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="color100g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00F0FF" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="color25g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="hour" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                  <YAxis stroke="#888" tick={{ fill: '#888' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#888', marginBottom: '4px' }}
                  />
                  <Area type="monotone" dataKey="100g" name="100g Protein" stroke="#00F0FF" fillOpacity={1} fill="url(#color100g)" />
                  <Area type="monotone" dataKey="25g" name="25g Protein" stroke="#6b7280" fillOpacity={1} fill="url(#color25g)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">התוצאות שטרפו את הקלפים:</h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 ml-3 shrink-0" />
                <p>צריכת 100 גרם חלבון יצרה תגובה עוצמתית ומתמשכת של בניית שריר שנמשכה <strong className="text-white">למעלה מ-12 שעות ברציפות</strong>.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 ml-3 shrink-0" />
                <p>עודפי החלבון לא התחמצנו ולא "בוזבזו". מערכת העיכול פשוט האטה את הקצב שלה ושחררה חומצות אמינו בטפטוף עקבי ואיטי אל השרירים.</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 ml-3 shrink-0" />
                <p>נצפתה ירידה משמעותית בפירוק השריר, והמאזן הכולל (Net Protein Balance) היה חיובי וגדול הרבה יותר מאשר במנה הקטנה.</p>
              </li>
            </ul>
          </div>
          <p className="text-lg md:text-xl font-medium text-white text-center mt-6">
            המסקנה: אין גבול עליון קשיח לכמות החלבון שהגוף מסוגל לנצל בארוחה אחת. הגוף חכם דיו לאגור את המזון ולהשתמש בו לאורך זמן.
          </p>
        </div>
      </section>

      {/* Section 3: Daily Distribution & Pre-Sleep */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500 to-transparent" />
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
            <span className="text-purple-500 ml-3">03.</span> חלוקה יומית אידיאלית
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
            הגורם המכריע ביותר ללא עוררין הוא <strong className="text-white">סך צריכת החלבון היומית</strong>. כל עוד מגיעים ליעד היומי (למשל 1.6 גרם/ק"ג), חלוקת הארוחות הופכת לשולית לטווח הארוך.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            עם זאת, למקסום מוחלט של התגובה השרירית, מודלים פרקטיים ממליצים על פיזור ל-3 עד 4 ארוחות ביום, המכילות כ-0.25 עד 0.4 גרם/ק"ג לארוחה. אדם שנוח לו לאכול 2 ארוחות ענקיות של 80 גרם יספוג וינצל אותן מצוין, אך פיזור קל עשוי להעניק יתרון קל ולמנוע תחושת כבדות.
          </p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-indigo-500 to-transparent" />
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
            <span className="text-indigo-500 ml-3">04.</span> חלבון לפני השינה
          </h2>
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Moon className="w-12 h-12 md:w-16 md:h-16 text-indigo-500 opacity-50" />
          </div>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            תזמון ספציפי שעשוי להעניק יתרון הוא צריכת חלבון לפני השינה. צריכה של כ-30 עד 40 גרם חלבון, רצוי חלבון שמתעכל לאט (כמו קזאין המצוי במוצרי חלב), מספקת לגוף אספקה איטית ורציפה של חומצות אמינו לאורך שעות הלילה.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-4">
            צעד פשוט זה מסייע לשפר את ההתאוששות ולהגביר את בניית השריר בזמן השינה, שכן החלבון מתעכל ונספג גם במהלך הלילה.
          </p>
        </div>
      </section>
    </div>
  );
}
