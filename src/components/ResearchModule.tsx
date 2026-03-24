import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, Eye, Info } from 'lucide-react';

const RESEARCH_FILES = [
  {
    id: 'study1',
    title: 'דוח מחקר מעמיק: ספיגת חלבון',
    description: 'ניצול מטבולי ואופטימיזציה תזונתית למתאמנים משולבים. סקירה מקיפה של מגבלות ספיגה, הבדלים בין מינים וגילאים, וסוגי חלבון.',
    filename: 'מגבלת ספיגת חלבון בגוף האדם_Gemini.pdf',
    url: '/מגבלת ספיגת חלבון בגוף האדם_Gemini.pdf' 
  },
  {
    id: 'study2',
    title: 'האם לגוף האדם יש מגבלה לצריכת חלבון',
    description: 'סקירה מדעית על תקרת ספיגה, עיכול, וניצול חלבון לבניית שריר בארוחה בודדת ולאורך היום.',
    filename: 'האם לגוף האדם יש מגבלה לצריכת חלבון_ChatGPT.pdf',
    url: '/האם לגוף האדם יש מגבלה לצריכת חלבון_ChatGPT.pdf' 
  }
];

export default function ResearchModule() {
  const [selectedPdf, setSelectedPdf] = useState<typeof RESEARCH_FILES[0] | null>(null);

  return (
    <div className="space-y-12" dir="rtl">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">ספריית מחקרים ומקורות</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          כאן תוכלו לקרוא באופן מלא ולהוריד את קבצי המחקר המקוריים עליהם מבוסס המידע באתר.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List of PDFs */}
        <div className="lg:col-span-1 space-y-4">
          {RESEARCH_FILES.map((file) => (
            <motion.div
              key={file.id}
              whileHover={{ scale: 1.02 }}
              className={`p-5 rounded-2xl border cursor-pointer transition-colors ${
                selectedPdf?.id === file.id
                  ? 'bg-accent-blue/10 border-accent-blue'
                  : 'bg-[#111111] border-white/10 hover:border-white/20'
              }`}
              onClick={() => setSelectedPdf(file)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${selectedPdf?.id === file.id ? 'bg-accent-blue/20 text-accent-blue' : 'bg-white/5 text-gray-400'}`}>
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{file.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{file.description}</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPdf(file);
                      }}
                      className="flex items-center gap-1.5 text-sm text-accent-blue hover:text-accent-blue/80 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      קרא מסמך
                    </button>
                    <a 
                      href={file.url}
                      download={file.filename}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm text-accent-green hover:text-accent-green/80 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      הורד PDF
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="lg:col-span-2 bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col min-h-[600px] h-[calc(100vh-250px)] relative">
          {selectedPdf ? (
            <div className="flex-1 w-full h-full flex flex-col">
              <div className="p-4 bg-[#1a1a1a] border-b border-white/10 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent-blue" />
                  <span className="font-medium text-gray-200">{selectedPdf.title}</span>
                </div>
                <div className="flex gap-2">
                  <a 
                    href={selectedPdf.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10"
                  >
                    פתח בחלון חדש
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex-1 bg-white relative">
                <iframe 
                  src={`${selectedPdf.url}#toolbar=0&navpanes=0&scrollbar=1`} 
                  className="absolute inset-0 w-full h-full border-none"
                  title="PDF Viewer"
                />
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-8 text-center">
              <div className="w-24 h-24 mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <FileText className="w-12 h-12 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">מציג המסמכים</h3>
              <p className="text-lg max-w-md mx-auto">
                בחר מחקר מהרשימה מימין כדי לקרוא אותו באופן מלא ישירות מתוך האתר.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
