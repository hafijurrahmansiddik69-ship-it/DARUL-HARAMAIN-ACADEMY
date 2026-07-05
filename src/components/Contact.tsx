import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full">
      {/* Full-width banner */}
      <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-10 relative overflow-hidden">
        <img 
          src="https://res.cloudinary.com/djginu4oz/image/upload/v1783241964/Gemini_Generated_Image_43jn1e43jn1e43jn_1_pdqbzj.png" 
          alt="Contact Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
           <h1 className="text-white text-4xl font-bold">যোগাযোগ</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">আমাদের সাথে যোগাযোগ করুন</h2>
        <p className="text-center text-gray-600 mb-12">আপনার মতামত বা প্রশ্ন আমাদের জানান। আমরা আপনার প্রতিক্রিয়ার জন্য অপেক্ষা করছি।</p>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 text-emerald-950">যোগাযোগের তথ্য</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#cfa852] flex-shrink-0" />
                <p>দারুল হারামাইন একাডেমি, ঢাকা, বাংলাদেশ</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#cfa852] flex-shrink-0" />
                <p>01300389797</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#cfa852] flex-shrink-0" />
                <p>darulharamainacademy@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 text-emerald-950">একটি বার্তা পাঠান</h3>
            <form className="grid gap-4">
              <input type="text" placeholder="নাম" className="p-3 bg-gray-50 rounded-lg border border-gray-200 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
              <input type="email" placeholder="ইমেইল" className="p-3 bg-gray-50 rounded-lg border border-gray-200 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
              <input type="text" placeholder="বিষয়" className="p-3 bg-gray-50 rounded-lg border border-gray-200 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
              <textarea placeholder="বার্তা" className="p-3 bg-gray-50 rounded-lg border border-gray-200 h-32 w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"></textarea>
              <button className="bg-emerald-800 text-white py-3 rounded-lg font-bold hover:bg-emerald-900 transition shadow-md hover:shadow-lg">বার্তা পাঠান</button>
            </form>
          </div>

          {/* Map and Socials */}
          <div className="space-y-10">
            <div className="p-2 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-64 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                  [মানচিত্র এখানে]
                </div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-6 text-gray-900">সোশ্যাল মিডিয়া লিঙ্ক</h3>
                <div className="flex gap-4">
                    <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"><Facebook /></a>
                    <a href="#" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition shadow-md"><Linkedin /></a>
                    <a href="#" className="p-3 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition shadow-md"><Twitter /></a>
                    <a href="#" className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-md"><Youtube /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

