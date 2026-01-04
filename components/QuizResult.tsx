
import React from 'react';
import { EXPERT_DATA, QUIZ_QUESTIONS } from '../constants';
import { QuizAnswers } from '../types';

interface Props {
  answers: QuizAnswers;
  onContinue: () => void;
}

const QuizResult: React.FC<Props> = ({ answers, onContinue }) => {
  const handleWhatsAppRedirect = (type: 'assessment' | 'direct') => {
    let messageText = type === 'assessment' 
      ? `Olá Dra. Naty! Concluí minha avaliação editorial:\n\n`
      : `Olá Dra. Naty! Gostaria de agendar um horário exclusivo.\n\n`;

    if (type === 'assessment') {
      Object.entries(answers).forEach(([id, answer]) => {
        const questionObj = QUIZ_QUESTIONS.find(q => q.id === Number(id));
        messageText += `*${questionObj?.question}*: ${answer}\n`;
      });
    }
    
    const encodedMessage = encodeURIComponent(messageText);
    const url = `${EXPERT_DATA.whatsapp}&text=${encodedMessage}`;
    
    const win = window.open(url, '_blank');
    if (!win) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center p-6 md:p-8 text-center animate-fade-in overflow-y-auto">
      <div className="w-full max-w-lg flex flex-col items-center space-y-8 md:space-y-6 my-auto">
        <header className="space-y-3">
          <span className="text-[9px] font-bold text-[#A68B6D] uppercase tracking-[0.6em]">Avaliação Concluída</span>
          <h1 className="text-4xl md:text-5xl font-luxury text-[#1A1515] leading-none font-extralight italic">Perfil <br/> Selecionado.</h1>
          <p className="text-[#1A1515]/40 text-[10px] font-extralight tracking-widest uppercase max-w-xs mx-auto">
            Seu perfil é ideal para o Método de Naturalidade da Dra.
          </p>
        </header>

        <div className="relative w-full max-w-[280px] md:max-w-[320px] group overflow-hidden bg-white shadow-2xl rounded-sm">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-64 md:h-72 object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 border-[12px] md:border-[15px] border-[#FCFAF7]"></div>
        </div>

        <div className="w-full grid grid-cols-1 gap-3 pt-2 max-w-xs">
          <button
            onClick={() => handleWhatsAppRedirect('assessment')}
            className="w-full bg-[#1A1515] text-white font-medium py-4 md:py-5 rounded-none shadow-xl transition-all hover:bg-[#A68B6D] text-[10px] md:text-[9px] uppercase tracking-[0.4em]"
          >
            Enviar Perfil Editorial
          </button>
          
          <button
            onClick={onContinue}
            className="w-full bg-transparent text-[#1A1515] font-light py-3 text-[8px] uppercase tracking-[0.5em] border-b border-[#1A1515]/5 hover:border-[#1A1515]/20 transition-all"
          >
            Acessar o Portfólio
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
