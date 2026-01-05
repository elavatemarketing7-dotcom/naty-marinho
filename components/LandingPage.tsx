
import React, { useState } from 'react';
import { EXPERT_DATA, SOCIAL_PROOF_GALLERY, WHY_TRUST_CARDS, HARMONIZATION_GALLERY } from '../constants';

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
    <div className="bg-[#FCFAF7] selection:bg-[#A68B6D] selection:text-white">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#1A1515]/98 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-w-full max-h-[90vh] object-contain shadow-2xl animate-fade-in" alt="Zoom" />
          <button className="absolute top-6 right-6 text-white/50 text-4xl font-extralight hover:text-white transition-colors">&times;</button>
        </div>
      )}

      {/* 1. HERO SECTION - Compactado para Desktop e Mobile */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-[#FCFAF7]/50 to-transparent md:bg-gradient-to-r md:from-[#FCFAF7] md:via-transparent md:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-end md:justify-center items-start pt-24 pb-10 md:py-0">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-luxury text-[#1A1515] leading-[0.9] mb-6 md:mb-8 font-extralight tracking-tighter">
              <span className="font-signature text-4xl md:text-6xl text-[#1A1515] block mb-1 lowercase">Dra.</span>
              Naty Marinho
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#1A1515] font-extralight max-w-md mb-8 md:mb-10 leading-relaxed tracking-tight opacity-90">
              Elevando a estética ao nível de <span className="italic font-normal">arte.</span> <br/>
              Realçando o seu melhor com <span className="font-normal border-b border-[#A68B6D]">naturalidade.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button 
                onClick={handleCTA}
                className="px-8 md:px-12 bg-[#1A1515] text-white font-medium py-4 md:py-5 hover:bg-[#A68B6D] transition-all duration-500 text-[9px] md:text-[10px] uppercase tracking-[0.4em] shadow-xl"
              >
                Agendar Consulta
              </button>
            </div>
            <p className="text-left text-[7px] md:text-[8px] text-[#1A1515]/50 mt-6 md:mt-8 font-bold uppercase tracking-[0.6em]">
              SANTOS • PRAIA GRANDE • SÃO PAULO
            </p>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO - Reduzido padding vertical em telas grandes */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FCFAF7]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full md:w-5/12 relative">
             <div className="absolute -inset-4 md:-inset-6 border border-[#A68B6D]/20 rounded-full opacity-30"></div>
             <img 
              src={EXPERT_DATA.secondaryImage} 
              className="w-full shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 relative z-10 rounded-sm" 
              alt="Dra. Naty Marinho" 
             />
          </div>
          <div className="w-full md:w-7/12 space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-luxury text-[#1A1515] leading-tight font-extralight italic">O detalhe que <br className="hidden md:block"/> muda tudo.</h2>
            <div className="space-y-4 md:space-y-6 text-[#1A1515]/80 leading-relaxed text-base md:text-lg font-extralight tracking-tight">
              <p>
                Minha filosofia é pautada na <strong>harmonia individualizada.</strong> A verdadeira beleza não é um padrão, é a expressão máxima da sua saúde e bem-estar.
              </p>
              <p>
                Protocolos exclusivos desenhados para serem <span className="text-[#A68B6D] italic">sofisticados e imperceptíveis.</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
                {["Visão Artística", "Produtos Premium", "Acompanhamento VIP", "Biossegurança"].map((item, i) => (
                  <div key={i} className="flex items-center justify-center md:justify-start gap-3 group">
                    <span className="w-6 h-px bg-[#A68B6D]/40 group-hover:w-10 group-hover:bg-[#A68B6D] transition-all duration-500"></span>
                    <span className="font-bold text-[#1A1515] uppercase tracking-[0.3em] text-[8px] md:text-[9px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFÓLIO GERAL - Compactado */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-[#F5EFE6]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-luxury mb-2 text-[#1A1515] font-extralight tracking-tighter">Portfólio</h2>
            <p className="text-[#1A1515]/40 uppercase tracking-[0.5em] text-[7px] md:text-[8px] font-black">A harmonia em sua forma mais pura</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 md:gap-3">
            {SOCIAL_PROOF_GALLERY.map((img, i) => (
              <div 
                key={i} 
                className="aspect-[4/5] overflow-hidden bg-white cursor-pointer group rounded-sm"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  alt={`Caso ${i+1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HARMONIZAÇÃO FACIAL ❤️ - Reduzido py no desktop */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-luxury mb-3 text-[#1A1515] font-extralight tracking-tighter italic">Harmonização Facial ❤️</h2>
            <p className="text-[#1A1515]/40 uppercase tracking-[0.5em] text-[7px] md:text-[8px] font-black">A excelência em estruturação e contornos</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
            {HARMONIZATION_GALLERY.map((img, i) => (
              <div 
                key={i} 
                className="group relative aspect-[3/4] overflow-hidden bg-[#FCFAF7] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-1000"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  alt={`Harmonização Facial ${i+1}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1515]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500 w-full text-center px-4">
                   <span className="text-[8px] md:text-[9px] text-white uppercase tracking-[0.5em] font-bold border border-white/40 px-4 md:px-6 py-2.5 md:py-3 backdrop-blur-md inline-block">Analisar Caso</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
             <button 
                onClick={handleCTA}
                className="text-[8px] md:text-[9px] font-bold text-[#A68B6D] uppercase tracking-[0.5em] border-b border-[#A68B6D]/30 pb-2 hover:border-[#A68B6D] transition-all"
             >
               Solicitar Avaliação de Harmonização
             </button>
          </div>
        </div>
      </section>

      {/* 5. OS PILARES - Compactado no desktop */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1A1515] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {WHY_TRUST_CARDS.map((card, i) => (
              <div key={i} className="space-y-4 md:space-y-6 group border-t border-white/10 pt-8 md:pt-10 hover:border-[#A68B6D]/50 transition-all duration-500">
                <span className="text-[8px] md:text-[9px] font-bold text-[#A68B6D] uppercase tracking-[0.5em]">Pilar 0{i+1}</span>
                <h3 className="text-lg md:text-xl font-luxury font-light uppercase tracking-widest">{card.title}</h3>
                <p className="text-white/50 text-[11px] md:text-xs leading-loose font-extralight max-w-xs">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVITE - Reduzido padding vertical no desktop */}
      <section className="py-20 md:py-24 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-20 bg-[#A68B6D]/20"></div>
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-10 relative z-10">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-luxury text-[#1A1515] leading-tight font-extralight italic">A beleza está na <br className="hidden md:block"/> exclusividade.</h3>
          <p className="text-[#1A1515]/60 text-base md:text-lg font-extralight tracking-tight max-w-xl mx-auto leading-relaxed">
            Permita-se um momento de cuidado único. Agende sua avaliação e descubra o potencial dos seus traços.
          </p>
          <button 
            onClick={handleCTA}
            className="inline-block px-10 md:px-12 bg-[#1A1515] text-white font-medium py-4 md:py-5 hover:bg-[#A68B6D] transition-all duration-500 text-[9px] md:text-[10px] uppercase tracking-[0.4em]"
          >
            Conversar com a Dra.
          </button>
        </div>
      </section>

      {/* 7. FOOTER EDITORIAL - Compactado para Desktop */}
      <section className="py-24 md:py-32 px-6 bg-[#1A1515] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 scale-100 grayscale blur-[1px]">
          <img src={EXPERT_DATA.backstageImage} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-luxury mb-8 md:mb-12 leading-none font-extralight tracking-tighter">O luxo de <br/> <span className="italic">ser você.</span></h2>
          <div className="h-px w-16 md:w-20 bg-[#A68B6D] mx-auto mb-8 md:mb-12"></div>
          <button 
            onClick={handleCTA}
            className="group relative inline-block text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] font-light py-2"
          >
            Solicitar Orçamento
            <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-[#A68B6D] transition-all duration-500"></span>
          </button>
        </div>
      </section>

      {/* 8. CREDITS */}
      <footer className="py-12 md:py-16 px-6 bg-[#FCFAF7] text-[#1A1515] text-center">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          <div className="flex flex-col items-center">
            <span className="font-signature text-5xl md:text-6xl text-[#A68B6D] mb-2 md:mb-4">Naty Marinho</span>
            <p className="text-[8px] md:text-[9px] text-[#1A1515]/40 uppercase tracking-[0.5em] md:tracking-[0.6em] font-bold">
              Estética • Saúde • Arte
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold hover:text-[#A68B6D] transition-colors border-b border-transparent hover:border-[#A68B6D]"
            >
              Instagram
            </a>
            <button 
              onClick={handleCTA}
              className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold hover:text-[#A68B6D] transition-colors border-b border-transparent hover:border-[#A68B6D]"
            >
              WhatsApp
            </button>
          </div>

          <div className="text-[7px] md:text-[8px] text-[#1A1515]/30 font-bold tracking-[0.2em] md:tracking-[0.3em] leading-loose max-w-sm mx-auto uppercase">
            &copy; {new Date().getFullYear()} Naty Marinho Editorial. <br/>
            Design para Clínicas de Elite.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
