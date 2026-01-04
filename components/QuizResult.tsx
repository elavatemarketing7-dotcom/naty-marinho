
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
    <div className="min-h-screen bg-[#FCFAF7] flex flex-col items-center justify-center p-10 text-center animate-fade-in">
      <div className="w-full max-w-xl flex flex-col items-center space-y-16">
        <header className="space-y-6">
          <span className="text-[10px] font-bold text-[#A68B6D] uppercase tracking-[0.6em]">Avaliação Concluída</span>
          <h1 className="text-5xl md:text-7xl font-luxury text-[#1A1515] leading-none font-extralight italic">Perfil <br/> Selecionado.</h1>
          <p className="text-[#1A1515]/40 text-sm font-extralight tracking-widest uppercase">
            Seu perfil é ideal para o Método de Naturalidade da Dra.
          </p>
        </header>

        <div className="relative w-full group overflow-hidden bg-white shadow-2xl">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-80 object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 border-[20px] border-[#FCFAF7]"></div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 pt-8">
          <button
            onClick={() => handleWhatsAppRedirect('assessment')}
            className="w-full bg-[#1A1515] text-white font-medium py-6 rounded-none shadow-xl transition-all hover:bg-[#A68B6D] text-xs uppercase tracking-[0.4em]"
          >
            Enviar Perfil Editorial
          </button>
          
          <button
            onClick={onContinue}
            className="w-full bg-transparent text-[#1A1515] font-light py-5 text-[9px] uppercase tracking-[0.6em] border-b border-[#1A1515]/10 hover:border-[#1A1515] transition-all"
          >
            Acessar o Portfólio
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
