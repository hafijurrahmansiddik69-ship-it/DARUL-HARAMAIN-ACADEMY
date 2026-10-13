/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import ContactPage from './pages/ContactPage';
import { AdmissionProvider } from './context/AdmissionContext';
import AdmissionModal from './components/AdmissionModal';

export default function App() {
  return (
    <AdmissionProvider>
      <BrowserRouter>
        <div className="font-bengali min-h-screen flex flex-col antialiased selection:bg-[#cfa852]/30 selection:text-emerald-950">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={<GenericPage title="ভিডিও" />} />
              <Route path="/kitab" element={<GenericPage title="কিতাব" />} />
              <Route path="/islam" element={<GenericPage title="ইসলাম" />} />
              <Route path="/amol" element={<GenericPage title="আমল সমুহ" />} />
              <Route path="/sirat" element={<GenericPage title="সিরাত" />} />
              <Route path="/blog" element={<GenericPage title="ব্লগ" />} />
              <Route path="/live" element={<GenericPage title="Live" />} />
              <Route path="/qa" element={<GenericPage title="প্রশ্ন/উত্তর" />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <AdmissionModal />
        </div>
      </BrowserRouter>
    </AdmissionProvider>
  );
}
