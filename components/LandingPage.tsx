
import React, { useState } from 'react';
import { EXPERT_DATA, SOCIAL_PROOF_GALLERY, HARMONIZATION_GALLERY, WHY_TRUST_CARDS } from '../constants';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCTA = () => {
    const message = encodeURIComponent("Olá Dra. Naty! Vi seu site e gostaria de saber mais sobre a primeira consulta gratuita.");
    const url = `${EXPERT_DATA.whatsapp}&text=${message}`;
    
    const win = window.open(url, '_blank');
    if (!win) {
      window.location.href = url;
    }
  };

  return (
    <div className="bg-[#FCFAF7]">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#1A1515]/98 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-w-full max-h-[90vh] object-contain shadow-2xl" alt="Zoom" />
          <button className="absolute top-10 right-10 text-white/50 text-4xl font-extralight hover:text-white transition-colors">&times;</button>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-end overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/20 to-transparent md:bg-gradient-to-r md:from-[#FCFAF7] md:via-[#FCFAF7]/10 md:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-end md:justify-center items-start pt-40 md:pt-0">
          <h1 className="text-7xl md:text-9xl font-luxury text-[#1A1515] leading-[0.8] mb-12 font-extralight">
            <span className="font-signature text-6xl md:text-8xl text-[#A68B6D] block mb-2 lowercase">Dra.</span>
            Naty Marinho
          </h1>
          <p className="text-2xl md:text-3xl text-[#1A1515] font-extralight max-w-lg mb-16 leading-[1.4] tracking-tight">
            Elevando a estética ao nível de <span className="italic font-normal">arte.</span> <br/>
            Realçando o seu melhor com <span className="font-normal border-b border-[#A68B6D]">naturalidade.</span>
          </p>
          
          <div className="w-full md:w-auto">
            <button 
              onClick={handleCTA}
              className="w-full md:px-20 bg-[#1A1515] text-white font-medium py-7 rounded-none hover:bg-[#A68B6D] active:bg-[#1A1515] transition-all duration-700 text-sm uppercase tracking-[0.5em] shadow-xl"
            >
              Agendar Consulta
            </button>
            <p className="text-center md:text-left text-[9px] text-[#1A1515]/40 mt-8 font-bold uppercase tracking-[0.6em]">
              SANTOS • PRAIA GRANDE • SÃO PAULO
            </p>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO */}
      <section className="py-32 px-10 md:px-32 bg-[#FCFAF7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute -inset-10 border border-[#A68B6D]/10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-1000 opacity-30"></div>
             <img 
              src={EXPERT_DATA.secondaryImage} 
              className="w-full shadow-none grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 relative z-10" 
              alt="Dra. Naty Marinho" 
             />
          </div>
          <div className="w-full md:w-1/2 space-y-12">
            <h2 className="text-5xl md:text-7xl font-luxury text-[#1A1515] leading-tight font-extralight italic">O detalhe que <br/> muda tudo.</h2>
            <div className="space-y-8 text-[#1A1515] leading-relaxed text-xl font-extralight tracking-tight">
              <p>
                Minha filosofia é simples: <strong>menos é mais.</strong> A verdadeira beleza não grita, ela sussurra elegância e saúde.
              </p>
              <p>
                Cada protocolo é desenhado para ser imperceptível aos olhos, mas transformador na sua autoconfiança.
              </p>
              <div className="grid grid-cols-1 gap-8 pt-10">
                {["Visão Artística", "Produtos de Elite", "Acompanhamento VIP"].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <span className="w-px h-12 bg-[#A68B6D]/30 group-hover:bg-[#A68B6D] group-hover:h-16 transition-all duration-700"></span>
                    <span className="font-bold text-[#1A1515] uppercase tracking-[0.4em] text-[10px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERIA EDITORIAL */}
      <section className="py-32 px-6 md:px-12 bg-[#F5EFE6]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-luxury mb-8 text-[#1A1515] font-extralight tracking-tighter">Portfólio Editorial</h2>
            <p className="text-[#1A1515]/30 uppercase tracking-[0.6em] text-[10px] font-bold">A harmonia em sua forma mais pura</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {SOCIAL_PROOF_GALLERY.map((img, i) => (
              <div 
                key={i} 
                className="aspect-[3/4] overflow-hidden bg-white cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  alt={`Caso ${i+1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OS PILARES */}
      <section className="py-32 px-10 bg-[#1A1515] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {WHY_TRUST_CARDS.map((card, i) => (
              <div key={i} className="space-y-8 group border-t border-white/5 pt-12 hover:border-white/20 transition-colors">
                <span className="text-[10px] font-bold text-[#A68B6D] uppercase tracking-[0.5em]">Pilar 0{i+1}</span>
                <h3 className="text-2xl font-luxury font-light uppercase tracking-widest">{card.title}</h3>
                <p className="text-white/40 text-sm leading-loose font-extralight">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONVITE */}
      <section className="py-40 px-10 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <h3 className="text-4xl md:text-6xl font-luxury text-[#1A1515] leading-tight font-extralight italic">Um convite à sua <br/> renovação.</h3>
          <p className="text-[#1A1515]/50 text-xl font-extralight tracking-tight max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa exclusiva para entendermos como realçar seus traços de forma personalizada.
          </p>
          <button 
            onClick={handleCTA}
            className="inline-block px-16 bg-[#1A1515] text-white font-medium py-7 hover:bg-[#A68B6D] transition-all duration-700 text-xs uppercase tracking-[0.5em]"
          >
            Falar com Especialista
          </button>
        </div>
      </section>

      {/* 8. FOOTER EDITORIAL */}
      <section className="py-48 px-10 bg-[#1A1515] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110 grayscale blur-[2px]">
          <img src={EXPERT_DATA.backstageImage} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-9xl font-luxury mb-16 leading-none font-extralight tracking-tighter">O luxo de ser <br/> <span className="italic">você.</span></h2>
          <div className="h-px w-32 bg-[#A68B6D] mx-auto mb-16"></div>
          <button 
            onClick={handleCTA}
            className="group relative inline-block text-lg uppercase tracking-[0.6em] font-light py-4"
          >
            Solicitar Orçamento
            <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-[#A68B6D] transition-all duration-700"></span>
          </button>
        </div>
      </section>

      {/* 9. CREDITS */}
      <footer className="py-24 px-10 bg-[#FCFAF7] text-[#1A1515] text-center">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col items-center">
            <span className="font-signature text-7xl text-[#A68B6D] mb-8">Naty Marinho</span>
            <p className="text-[10px] text-[#1A1515] uppercase tracking-[0.8em] font-black opacity-30">
              Estética • Saúde • Arte
            </p>
          </div>
          
          <div className="flex justify-center gap-16">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.4em] font-bold hover:text-[#A68B6D] transition-colors"
            >
              Instagram
            </a>
            <button 
              onClick={handleCTA}
              className="text-[9px] uppercase tracking-[0.4em] font-bold hover:text-[#A68B6D] transition-colors"
            >
              WhatsApp
            </button>
          </div>

          <div className="text-[9px] text-[#1A1515]/20 font-bold tracking-[0.3em] leading-loose max-w-sm mx-auto uppercase">
            &copy; {new Date().getFullYear()} Naty Marinho Editorial. <br/>
            Design Estratégico para Clínicas de Elite.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
