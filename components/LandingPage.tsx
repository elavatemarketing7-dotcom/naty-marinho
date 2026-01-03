
import React, { useState } from 'react';
import { EXPERT_DATA, SOCIAL_PROOF_GALLERY, HARMONIZATION_GALLERY, WHY_TRUST_CARDS } from '../constants';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCTA = () => {
    const message = encodeURIComponent("Olá Dra. Naty! Vi seu site e gostaria de saber mais sobre a primeira consulta gratuita.");
    const separator = EXPERT_DATA.whatsapp.includes('?') ? '&' : '?';
    window.location.href = `${EXPERT_DATA.whatsapp}${separator}text=${message}`;
  };

  return (
    <div className="bg-white">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" alt="Zoom" />
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-end overflow-hidden">
        {/* Background Image - Absolute for mobile focus */}
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-center md:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent md:bg-gradient-to-r md:from-white md:via-white/60 md:to-transparent"></div>
        </div>

        <div className="relative z-10 w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-end md:justify-center items-start pt-24 md:pt-0">
          <span className="font-signature text-4xl text-[#D4AF37] mb-4">Dra.</span>
          <h1 className="text-5xl md:text-7xl font-luxury text-[#2D2D2D] leading-[0.9] mb-6">
            Eu sou a <br/>
            <span className="text-[#D4AF37]">Naty Marinho</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-md mb-10 leading-relaxed">
            Especialista em realçar sua beleza natural com segurança e resultados refinados.
          </p>
          
          <div className="w-full md:w-auto">
            <button 
              onClick={handleCTA}
              className="w-full md:px-12 bg-[#D4AF37] text-white font-bold py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest border-b-4 border-[#B08D2A]"
            >
              AGENDAR CONSULTA GRATUITA
            </button>
            <p className="text-center md:text-left text-xs text-gray-400 mt-3 font-medium uppercase tracking-widest">
              SEM COMPROMISSO • PRAIA GRANDE, SP
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 md:px-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -inset-4 border border-[#D4AF37] rounded-3xl -z-10 translate-x-4 translate-y-4 opacity-30"></div>
             <img 
              src={EXPERT_DATA.secondaryImage} 
              className="w-full rounded-3xl shadow-2xl" 
              alt="Sobre" 
             />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-luxury text-[#D4AF37]">Minha missão é esculpir sua melhor versão</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Não acredito em procedimentos padronizados. Acredito que cada rosto é uma obra de arte única que merece um olhar artístico e detalhista.
              </p>
              <p>
                Minha formação é focada na <strong>naturalidade</strong>. Meu objetivo é que você se olhe no espelho e se reconheça, apenas com um ar mais descansado, jovem e confiante.
              </p>
              <ul className="space-y-3 pt-4">
                {["Protocolos Personalizados", "As Melhores Marcas do Mundo", "Acompanhamento Pós-Procedimento", "Foco em Segurança Total"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-luxury mb-4">Resultados Reais</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Transformações que inspiram confiança</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOCIAL_PROOF_GALLERY.map((img, i) => (
              <div 
                key={i} 
                className="aspect-square overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={`Resultado ${i+1}`} 
                />
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-8 uppercase italic">
            * Resultados podem variar de pessoa para pessoa. Fotos autorizadas.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-luxury text-center mb-16 text-[#D4AF37]">Por que confiar em mim?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_TRUST_CARDS.map((card, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-2xl font-luxury mb-4 text-[#D4AF37]">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIARIO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-luxury mb-8">Ainda tem dúvidas sobre o que o seu rosto precisa?</h3>
          <button 
            onClick={handleCTA}
            className="w-full md:w-auto md:px-16 bg-[#25D366] text-white font-bold py-6 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-wide border-b-4 border-green-700"
          >
            SABER MAIS NO WHATSAPP
          </button>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-luxury text-center mb-16">Como funciona a sua primeira vez?</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Contato Inicial", desc: "Você clica no botão e fala diretamente com meu suporte para tirar dúvidas básicas." },
              { step: "02", title: "Agendamento de Consulta", desc: "Marcamos um horário exclusivo para você vir até meu consultório em Praia Grande." },
              { step: "03", title: "Avaliação Personalizada", desc: "Sentamos juntas, analiso seu rosto e montamos um plano de tratamento único. É gratuito e sem compromisso." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="text-5xl font-luxury text-[#D4AF37]/20 font-bold">{item.step}</span>
                <div>
                  <h4 className="text-2xl font-luxury text-[#2D2D2D] mb-2">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS - HARMONIZAÇÃO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-luxury text-center mb-16">Harmonização de <span className="text-red-500">♥</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {HARMONIZATION_GALLERY.map((img, i) => (
              <div 
                key={i} 
                className="aspect-square rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform" alt="Harmonização" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 bg-[#D4AF37] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={EXPERT_DATA.backstageImage} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-luxury mb-8 leading-tight">Você merece se sentir <br/> linda todos os dias.</h2>
          <p className="text-xl mb-12 font-light text-white/90">O primeiro passo para sua transformação é agora.</p>
          <button 
            onClick={handleCTA}
            className="w-full md:w-auto md:px-20 bg-white text-[#D4AF37] font-bold py-7 rounded-2xl shadow-2xl hover:bg-gray-100 transition-all text-xl uppercase tracking-widest border-b-4 border-gray-200"
          >
            QUERO MINHA CONSULTA GRATUITA
          </button>
          <p className="mt-8 text-sm font-medium text-white/70 uppercase tracking-widest">Atendimento em Praia Grande - SP</p>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-16 px-6 bg-stone-100 text-[#2D2D2D] text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="font-signature text-5xl text-[#D4AF37] mb-6">{EXPERT_DATA.name}</span>
          <p className="text-sm text-gray-400 mb-8 uppercase tracking-widest">
            {EXPERT_DATA.profession} • {EXPERT_DATA.location}
          </p>
          
          <div className="flex gap-8 mb-12">
            <a href={EXPERT_DATA.instagram} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#D4AF37] transition-colors font-medium underline underline-offset-4">Instagram</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleCTA(); }} className="text-gray-600 hover:text-[#D4AF37] transition-colors font-medium underline underline-offset-4">WhatsApp</a>
          </div>

          <div className="text-[10px] text-gray-400 font-medium tracking-widest leading-loose">
            &copy; {new Date().getFullYear()} DRA. NATY MARINHO. TODOS OS DIREITOS RESERVADOS. <br/>
            DESIGN PREMIUM PARA RESULTADOS REAIS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
