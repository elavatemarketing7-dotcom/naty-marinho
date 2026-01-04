
import React, { useEffect, useState } from 'react';
import { EXPERT_DATA } from '../constants';

interface Props {
  onComplete: () => void;
}

const AnalyzingScreen: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 segundos
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[70] bg-[#FCFAF7] flex flex-col items-center justify-center p-10 text-center animate-fade-in">
      <div className="max-w-md w-full space-y-12">
        {/* Foto da Dra em destaque suave */}
        <div className="relative inline-block mb-4">
           <div className="w-20 h-20 rounded-full border border-[#A68B6D]/30 p-1 mx-auto overflow-hidden">
              <img 
                src={EXPERT_DATA.heroImage} 
                className="w-full h-full object-cover rounded-full grayscale-[0.3]" 
                alt="Dra. Naty Marinho" 
              />
           </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-luxury font-light text-[#1A1515] tracking-tight italic">
            Analisando...
          </h2>
          <p className="text-[#1A1515]/50 text-[10px] uppercase tracking-[0.4em] font-bold">
            Definindo o protocolo ideal para sua beleza única
          </p>
        </div>

        {/* Barra de Carregamento Editorial */}
        <div className="relative w-full h-[1px] bg-[#1A1515]/5 mt-10">
          <div 
            className="absolute top-0 left-0 h-[2px] bg-[#A68B6D] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(166,139,109,0.3)]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="pt-8">
           <p className="text-[9px] text-[#A68B6D] italic tracking-widest font-medium animate-pulse">
             Verificando simetria e pontos de harmonização
           </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingScreen;
