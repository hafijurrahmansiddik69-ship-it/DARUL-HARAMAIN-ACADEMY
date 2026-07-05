import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Moon, Sun, ShieldCheck, Heart, User, Clock, HandCoins, CalendarDays, RefreshCw, X } from "lucide-react";

const amols = [
  { icon: Clock, title: "১. পাঁচ ওয়াক্ত নামাজ সঠিক সময়ে পড়া", description: "ইসলামের সবচেয়ে গুরুত্বপূর্ণ স্তম্ভ হলো নামাজ। রাসুলুল্লাহ (সাঃ) কে জিজ্ঞেস করা হয়েছিল, আল্লাহর কাছে সবচেয়ে প্রিয় আমল কোনটি? তিনি বলেছিলেন, \"সঠিক সময়ে নামাজ আদায় করা।\" (সহীহ বুখারী)" },
  { icon: Sun, title: "২. সকাল-সন্ধ্যার জিকির ও দোয়া", description: "সকাল এবং সন্ধ্যায় (ফজর ও আসরের পর) রাসুলুল্লাহ (সাঃ) নির্দেশিত দোয়া ও জিকিরগুলো পাঠ করা। এগুলো মানুষকে সারাদিনের যাবতীয় অনিষ্ট, জিন-শয়তান এবং দুর্ঘটনা থেকে নিরাপদে রাখে।" },
  { icon: Moon, title: "৩. ঘুমানোর আগের সুন্নাত আমল", description: "রাতে ঘুমাতে যাওয়ার আগে ওজু করা, বিছানা ঝেড়ে নেওয়া এবং আয়াতুল কুরসি ও শেষ তিন কুল (সুরা ইখলাস, ফালাক, নাস) পড়ে হাতে ফু দিয়ে পুরো শরীরে হাত বুলানো। এছাড়া সুরা মুলক তিলাওয়াত করা, যা কবরের আজাব থেকে রক্ষা করে।" },
  { icon: RefreshCw, title: "৪. বেশি বেশি ইস্তিগফার (ক্ষমা প্রার্থনা) করা", description: "চলতে-ফিরতে মুখে \"আস্তাগফিরুল্লাহ\" পাঠ করা। ইস্তিগফারের মাধ্যমে আল্লাহ তাআলা গুনাহ মাফ করেন, রিজিকে বরকত দেন, দুশ্চিন্তা দূর করেন এবং অভাব-অনটন দূর করে দেন।" },
  { icon: BookOpen, title: "৫. প্রতিদিন কুরআন তিলাওয়াত করা", description: "কুরআনের প্রতিটি হরফ বা অক্ষরের জন্য ১০টি করে নেকি পাওয়া যায়। প্রতিদিন অন্তত ১টি আয়াত হলেও অর্থসহ বুঝে পড়ার চেষ্টা করা উচিত। এতে অন্তরে প্রশান্তি আসে।" },
  { icon: Heart, title: "৬. রাসুলুল্লাহ (সাঃ) এর ওপর দুরুদ পাঠ", description: "প্রতিদিন বেশি বেশি দুরুদ শরীফ (যেমন: আল্লাহুম্মা সাল্লি ওয়া সাল্লিম আলা নাবিয়্যিনা মুহাম্মদ) পাঠ করা। যে ব্যক্তি রাসুলের ওপর একবার দুরুদ পাঠ করে, আল্লাহ তার ওপর ১০টি রহমত নাজিল করেন।" },
  { icon: ShieldCheck, title: "৭. ওজুর পর কালিমায়ে শাহাদাত পাঠ", description: "সঠিকভাবে ওজু শেষ করে এই দোয়াটি পড়া:\n\n\"আশহাদু আল-লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারিকা লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসুলুহু。\"\nরাসুলুল্লাহ (সাঃ) বলেছেন, এই দোয়া পাঠকারীর জন্য জান্নাতের ৮টি দরজাই খুলে দেওয়া হয়। (সহীহ মুসলিম)" },
  { icon: HandCoins, title: "৮. দান-সদকাহ করা", description: "দান করলে সম্পদ কমে না, বরং বৃদ্ধি পায় এবং এটি আল্লাহর ক্রোধকে ঠান্ডা করে। প্রতিদিন বা প্রতি সপ্তাহে সামর্থ্য অনুযায়ী অল্প হলেও সদকাহ করার অভ্যাস করা উচিত。" },
  { icon: CalendarDays, title: "৯. জুমার দিনে সুরা কাহাফ পাঠ", description: "প্রতি সপ্তাহের শ্রেষ্ঠ দিন হলো জুমার দিন (শুক্রবার)। এই দিনে যে ব্যক্তি সুরা কাহাফ তিলাওয়াত করবে, আল্লাহ তাআলা তার জন্য এক জুমা থেকে পরবর্তী জুমা পর্যন্ত বিশেষ নূরের আলো চমকিয়ে দেন。" },
  { icon: User, title: "১০. ঘুমানোর আগে মানুষকে ক্ষমা করে দেওয়া", description: "সারাদিন যারা আপনার মনে কষ্ট দিয়েছে বা অন্যায় করেছে, রাতে ঘুমানোর আগে আল্লাহর সন্তুষ্টির জন্য তাদের সবাইকে ক্ষমা করে দেওয়া। এই আমলটি অন্তরের অহংকার ও হিংসা দূর করে এবং আল্লাহর দরবারে মর্যাদা বাড়িয়ে দেয়।" },
];

export default function DailyAmolList() {
  const [selectedAmol, setSelectedAmol] = useState<(typeof amols)[0] | null>(null);

  return (
    <div className="py-12 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {amols.map((amol, index) => {
          const Icon = amol.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedAmol(amol)}
              className="amal-card bg-[#fbf5e6] border-[8px] border-double border-[#0d5c46] rounded-md p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 outline outline-2 outline-[#d4af37] outline-offset-[-5px] relative cursor-pointer"
            >
              <div className="absolute top-2 left-2 bg-[#0d5c46] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#d4af37]">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0c4233] mb-3 mt-6">{amol.title}</h3>
              <Icon className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <p className="text-gray-700 text-sm font-medium opacity-90 truncate">{amol.description}</p>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedAmol && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedAmol(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#fbf5e6] border-[8px] border-double border-[#0d5c46] rounded-md p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedAmol(null)}
                className="absolute top-2 right-2 p-1 text-[#0d5c46]"
              >
                <X className="w-6 h-6" />
              </button>
              <selectedAmol.icon className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#0c4233] mb-4">{selectedAmol.title}</h3>
              <p className="text-gray-800 text-lg font-medium leading-relaxed whitespace-pre-line">{selectedAmol.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
