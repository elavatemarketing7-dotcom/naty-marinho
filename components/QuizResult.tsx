
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
      ? `Olá Dra. Naty! Acabei de completar o quiz no site. Aqui está minha avaliação personalizada:\n\n`
      : `Olá Dra. Naty! Gostaria de marcar uma consulta inicial gratuita.\n\n`;

    if (type === 'assessment') {
      Object.entries(answers).forEach(([id, answer]) => {
        const questionObj = QUIZ_QUESTIONS.find(q => q.id === Number(id));
        messageText += `*${questionObj?.question}*: ${answer}\n`;
      });
    }
    
    const encodedMessage = encodeURIComponent(messageText);
    // Since the base URL now has parameters, we check if it already has a '?'
    const separator = EXPERT_DATA.whatsapp.includes('?') ? '&' : '?';
    const url = `${EXPERT_DATA.whatsapp}${separator}text=${encodedMessage}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center animate-fade-in">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Compact Header */}
        <div className="mb-4">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">
            PERFIL COMPATÍVEL
          </span>
          <h1 className="text-2xl font-luxury text-[#2D2D2D] leading-tight mb-1">
            Você é a <span className="italic text-[#D4AF37]">Paciente Ideal</span>
          </h1>
          <p className="text-gray-500 text-xs px-4">
            Com base nas suas respostas, o Método da {EXPERT_DATA.name} entrega exatamente a naturalidade e segurança que você procura.
          </p>
        </div>

        {/* Hero Image Section - Compact for Mobile */}
        <div className="relative w-full mb-6 px-4">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 rounded-2xl"></div>
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-48 md:h-64 object-cover object-top rounded-2xl shadow-xl"
          />
        </div>

        {/* Action Buttons - Exact request order & text */}
        <div className="w-full space-y-3 z-20 px-2">
          {/* Button 1 */}
          <button
            onClick={() => handleWhatsAppRedirect('assessment')}
            className="w-full bg-[#D4AF37] text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 text-base uppercase tracking-wider animate-pulse border-b-4 border-[#B08D2A]"
          >
            1- Enviar minha avaliação DRA
          </button>
          
          {/* Button 2 */}
          <button
            onClick={() => handleWhatsAppRedirect('direct')}
            className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-95 text-base flex items-center justify-center gap-2 uppercase tracking-wider border-b-4 border-green-700"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            2- CHAMAR NO WHATSAPP SEM COMPROMISSO
          </button>

          {/* Button 3 */}
          <button
            onClick={onContinue}
            className="w-full bg-gray-50 text-gray-500 font-semibold py-4 rounded-xl border border-gray-200 transition-all active:scale-95 text-xs uppercase tracking-tight"
          >
            3- NÃO ENVIAR E CONTINUAR NO SITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
