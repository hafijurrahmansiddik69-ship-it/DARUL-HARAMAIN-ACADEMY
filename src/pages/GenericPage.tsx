import DailyAmolList from "../components/DailyAmolList";
import IslamicBanner from "../components/IslamicBanner";
import VideoPlayer from "../components/VideoPlayer";

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="py-20 px-6 bg-slate-50/50 min-h-screen">
      {title === "আমল সমুহ" ? (
        <IslamicBanner />
      ) : title === "ভিডিও" ? null : (
        <h1 className="text-4xl font-bold text-center mb-12 text-emerald-950">{title}</h1>
      )}
      
      {title === "আমল সমুহ" ? (
        <DailyAmolList />
      ) : title === "ভিডিও" ? (
        <VideoPlayer />
      ) : (
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-600 font-medium">This is the {title} page.</p>
        </div>
      )}
    </div>
  );
}
