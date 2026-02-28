
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="modalidades" className="py-32 bg-[#0a0f16] relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24 reveal">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Nossas Modalidades</h2>
          <div className="w-24 h-1.5 bg-fg-gold mx-auto mb-10"></div>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Oferecemos uma linha completa de soluções com a agilidade digital que o mercado moderno exige.
            Proteção precisa para cada necessidade da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`group p-10 glass-card rounded-[2.5rem] transition-all duration-500 hover:bg-white/5 hover:-translate-y-4 reveal ${service.link ? 'border border-fg-gold/20 hover:border-fg-gold/50' : ''
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-all duration-500 ${service.link
                ? 'bg-fg-gold/15 text-fg-gold group-hover:bg-fg-gold group-hover:text-fg-navy'
                : 'bg-fg-gold/10 text-fg-gold group-hover:bg-fg-gold group-hover:text-fg-navy'
                }`}>
                <div className="scale-125">{service.icon}</div>
              </div>

              {service.link && (
                <span className="inline-block px-3 py-1 rounded-full bg-fg-gold/10 border border-fg-gold/30 text-fg-gold text-[10px] font-bold uppercase tracking-widest mb-4">
                  Novo
                </span>
              )}

              <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-fg-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-200 transition-colors mb-10">
                {service.description}
              </p>
              <div className="pt-6 border-t border-white/5">
                {service.link ? (
                  <a
                    href={service.link}
                    className="flex items-center text-fg-gold font-bold text-sm"
                  >
                    <span className="relative translate-x-0 group-hover:translate-x-2 transition-transform duration-300">SAIBA MAIS</span>
                    <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveService(service)}
                    className="flex items-center text-fg-gold font-bold text-sm cursor-pointer overflow-hidden bg-transparent border-none p-0"
                  >
                    <span className="relative translate-x-0 group-hover:translate-x-2 transition-transform duration-300">SOLICITAR ANÁLISE</span>
                    <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  );
};

export default Services;
