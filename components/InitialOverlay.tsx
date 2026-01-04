
import React from 'react';
import { EXPERT_DATA } from '../constants';

interface Props {
  onStartQuiz: () => void;
  onSkip: () => void;
}

const InitialOverlay: React.FC<Props> = ({ onStartQuiz, onSkip }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 bg-[#FCFAF7] backdrop-blur-md">
      <div className="max-w-md w-full text-center space-y-10 md:space-y-8 animate-fade-in">
        <div className="relative group">
          <div className="absolute -inset-1 bg-[#A68B6D] rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full mx-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-[0_20px_50px_rgba(166,139,109,0.15)] relative z-10"
          />
        </div>

        <div className="space-y-4 md:space-y-5">
          <h1 className="text-4xl md:text-5xl font-luxury font-light text-[#1A1515] tracking-tight leading-tight">
            Descubra a sua <br/>
            <span className="italic font-normal border-b border-[#A68B6D]/30 pb-1">beleza autêntica.</span>
          </h1>
          <p className="text-[#3D3030] text-lg md:text-base font-light tracking-wide">
            Dra. Naty Marinho <br/>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Estética Avançada de Luxo</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-3 pt-2">
          <button
            onClick={onStartQuiz}
            className="w-full bg-[#1A1515] hover:bg-[#A68B6D] text-white font-medium py-4 md:py-5 rounded-full shadow-lg transition-all duration-500 active:scale-[0.98] text-sm md:text-xs uppercase tracking-[0.3em]"
          >
            Iniciar Avaliação
          </button>
          <button
            onClick={onSkip}
            className="w-full text-[#1A1515] font-light py-4 text-xs md:text-[10px] uppercase tracking-[0.4em] border-b border-[#1A1515]/10 hover:border-[#1A1515] transition-all"
          >
            Apenas visitar o site
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialOverlay;
