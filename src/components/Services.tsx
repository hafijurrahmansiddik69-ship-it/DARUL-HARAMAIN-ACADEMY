import React from 'react';
import { Mic, Users, Calendar } from 'lucide-react';

const Services = () => {
  const services = [];
  return (
    <section id="services" className="py-20 px-6 -skew-y-2 bg-gray-50">
      <div className="skew-y-2">
        <h2 className="text-3xl font-bold mb-10 text-center">সেবা সমূহ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {services.map(s => (
            <div key={s.title} className="text-center p-6 border rounded-lg w-40">
              <s.icon className="mx-auto mb-4" size={40} />
              <p className="font-bold">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
