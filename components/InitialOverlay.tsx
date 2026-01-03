
import React from 'react';
import { EXPERT_DATA } from '../constants';

interface Props {
  onStartQuiz: () => void;
  onSkip: () => void;
}

const InitialOverlay: React.FC<Props> = ({ onStartQuiz, onSkip }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-white/95 backdrop-blur-md">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        <div className="relative inline-block">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-[#D4AF37] mx-auto shadow-2xl"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap uppercase tracking-widest">
            Especialista
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-luxury font-medium text-[#2D2D2D]">
            Sua jornada para a <br/>
            <span className="italic text-[#D4AF37]">autoestima</span> começa aqui.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Olá, sou a <span className="font-semibold">{EXPERT_DATA.name}</span>. Para te oferecer uma experiência personalizada, gostaria de te conhecer melhor.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={onStartQuiz}
            className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-95 text-lg uppercase tracking-wider"
          >
            Fazer Avaliação Grátis
          </button>
          <button
            onClick={onSkip}
            className="w-full bg-transparent hover:bg-gray-50 text-[#D4AF37] font-semibold py-4 rounded-2xl border-2 border-[#D4AF37]/30 transition-all active:scale-95 text-base"
          >
            Ver site direto
          </button>
        </div>
        
        <p className="text-xs text-gray-400 font-medium italic">
          * Leva menos de 1 minuto.
        </p>
      </div>
    </div>
  );
};

export default InitialOverlay;
