import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FacultyAndAdmissionInfo from '../components/FacultyAndAdmissionInfo';
import NoticeBoard from '../components/NoticeBoard';
import VideoPlayer from '../components/VideoPlayer';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <FacultyAndAdmissionInfo />
      <NoticeBoard />
      <div id="gallery" className="py-14 bg-slate-100/60 border-y border-slate-200/60 scroll-mt-20">
        <VideoPlayer />
      </div>
      <Contact />
    </>
  );
}
