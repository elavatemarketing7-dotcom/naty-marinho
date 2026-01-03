
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
    <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center overflow-hidden">
      {/* Background Main Site Peek (Blurred) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale">
        <img src={EXPERT_DATA.heroImage} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="w-full max-w-lg flex-1 flex flex-col p-6 z-10">
        <header className="flex flex-col items-center mb-10 pt-4">
          <span className="font-signature text-4xl text-[#D4AF37] mb-2">{EXPERT_DATA.name}</span>
          <div className="w-full h-1 bg-gray-100 rounded-full mt-4">
            <div 
              className="h-full bg-[#D4AF37] rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-[0.2em] font-bold">
            Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
          </p>
        </header>

        <div className="flex-1 flex flex-col justify-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-luxury text-center text-[#2D2D2D] mb-12">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="space-y-4">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className="w-full bg-white border-2 border-gray-100 hover:border-[#D4AF37] text-gray-700 font-medium py-5 px-6 rounded-2xl transition-all shadow-sm active:scale-[0.98] text-left relative group overflow-hidden"
              >
                <span className="relative z-10">{option}</span>
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            ))}
          </div>
        </div>

        <footer className="mt-auto py-8 text-center">
          <button 
            onClick={onSkip}
            className="text-gray-400 text-sm font-medium underline underline-offset-4"
          >
            Pular e ver o site
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Quiz;
