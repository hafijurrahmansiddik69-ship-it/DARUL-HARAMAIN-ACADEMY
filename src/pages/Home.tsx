import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import NoticeBoard from '../components/NoticeBoard';
import VideoPlayer from '../components/VideoPlayer';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <NoticeBoard />
      <div className="py-14 bg-slate-100/60 border-y border-slate-200/60">
        <VideoPlayer />
      </div>
      <Contact />
    </>
  );
}
