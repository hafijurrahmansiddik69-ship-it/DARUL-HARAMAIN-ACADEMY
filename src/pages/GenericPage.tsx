import DailyAmolList from "../components/DailyAmolList";
import IslamicBanner from "../components/IslamicBanner";

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="py-20 px-6">
      {title === "আমল সমুহ" ? (
        <IslamicBanner />
      ) : (
        <h1 className="text-4xl font-bold text-center mb-12">{title}</h1>
      )}
      {title === "আমল সমুহ" ? (
        <DailyAmolList />
      ) : (
        <p className="text-center">This is the {title} page.</p>
      )}
    </div>
  );
}
