/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen flex flex-col">
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
      </div>
    </BrowserRouter>
  );
}
