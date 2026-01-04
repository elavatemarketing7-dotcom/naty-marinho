
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_DATA } from '../constants';
import { QuizAnswers } from '../types';

interface Props {
  onFinish: (answers: QuizAnswers) => void;
  onSkip: () => void;
}

const Quiz: React.FC<Props> = ({ onFinish, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[60] bg-[#FCFAF7] flex flex-col items-center overflow-hidden">
      {/* Moldura Flutuante Editorial da Dra. */}
      <div className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative group animate-float">
          <div className="absolute -inset-2 border border-[#A68B6D]/20 rounded-full scale-110"></div>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-[#A68B6D]/50 overflow-hidden shadow-2xl bg-white p-1">
            <img 
              src={EXPERT_DATA.heroImage} 
              alt={EXPERT_DATA.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Badge sutil de Especialista */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1A1515] text-white text-[7px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full shadow-lg">
            Sua Especialista
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg flex-1 flex flex-col p-8 z-10 pt-48 md:pt-56">
        <header className="flex flex-col items-center mb-12">
          <div className="w-full h-[1px] bg-[#1A1515]/5 mt-2 relative">
            <div 
              className="absolute top-0 left-0 h-[2px] bg-[#A68B6D] transition-all duration-1000 ease-in-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-[9px] text-[#1A1515]/30 mt-4 uppercase tracking-[0.5em] font-black">
            Análise Personalizada • {currentStep + 1} / {QUIZ_QUESTIONS.length}
          </p>
        </header>

        <div className="flex-1 flex flex-col justify-start animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-luxury text-center text-[#1A1515] font-light mb-12 leading-tight">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full group bg-white border border-[#1A1515]/5 hover:border-[#A68B6D] text-[#1A1515] font-light py-5 px-10 rounded-full transition-all duration-500 shadow-sm hover:shadow-md active:scale-[0.99] text-center relative overflow-hidden"
              >
                <span className="text-xs tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 relative z-10">{option}</span>
                <div className="absolute inset-0 bg-[#A68B6D]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            ))}
          </div>
        </div>

        <footer className="mt-auto py-8 text-center">
          <button 
            onClick={onSkip}
            className="text-[#1A1515]/30 text-[9px] font-bold uppercase tracking-[0.4em] hover:text-[#1A1515] transition-colors border-b border-transparent hover:border-[#1A1515]/20 pb-1"
          >
            Pular Avaliação
          </button>
        </footer>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Quiz;
