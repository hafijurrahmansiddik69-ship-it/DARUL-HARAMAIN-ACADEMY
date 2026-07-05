import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import KhutbahContent from '../components/KhutbahContent';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <div className="py-12 bg-slate-100/50">
        <VideoPlayer />
      </div>
      <Portfolio />
      <KhutbahContent />
    </>
  );
}
