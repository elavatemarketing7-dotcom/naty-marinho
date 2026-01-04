
import { QuizQuestion } from './types';

export const EXPERT_DATA = {
  name: "Dra. Natymarinho",
  profession: "Estética | Botox | Harmonização",
  location: "Praia Grande, SP",
  // URL formatada corretamente para o Brasil (55) + DDD (13) + Número
  // Mantendo o utm_source conforme solicitado mas garantindo que o número esteja completo.
  whatsapp: "https://api.whatsapp.com/send?phone=5513992087226&utm_source=ig",
  instagram: "https://www.instagram.com/dra.natymarinho/",
  heroImage: "https://i.imgur.com/Uih2mqz.png",
  secondaryImage: "https://i.imgur.com/M0DjT4V.png",
  backstageImage: "https://i.imgur.com/vvHuc25.png"
};

export const SOCIAL_PROOF_GALLERY = [
  "https://i.imgur.com/LmMlEJe.png",
  "https://i.imgur.com/VgEdDFZ.png",
  "https://i.imgur.com/RJiIZIg.png",
  "https://i.imgur.com/yeIN2Oq.png",
  "https://i.imgur.com/7EVnsA2.png",
  "https://i.imgur.com/n8B8Xag.png",
  "https://i.imgur.com/ic0XUHT.png",
  "https://i.imgur.com/YbgKUrM.png",
  "https://i.imgur.com/ARv5vjE.png",
  "https://i.imgur.com/ItCjMjL.png",
  "https://i.imgur.com/LBd3t3A.png",
  "https://i.imgur.com/O1aDGTY.png",
  "https://i.imgur.com/PqHbs6j.png",
  "https://i.imgur.com/QgskNiO.png"
];

export const HARMONIZATION_GALLERY = [
  "https://i.imgur.com/PVAPGnd.png",
  "https://i.imgur.com/vCnTGdo.png",
  "https://i.imgur.com/qKSsHxA.png",
  "https://i.imgur.com/Gz5jLxz.png",
  "https://i.imgur.com/vrorI43.png",
  "https://i.imgur.com/vv7NNdB.png"
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual o seu principal desejo hoje?",
    options: ["Eliminar rugas de expressão", "Lábios mais volumosos", "Harmonizar o contorno facial", "Melhorar a qualidade da pele"]
  },
  {
    id: 2,
    question: "Você já realizou algum procedimento estético?",
    options: ["Sim, e adoro os resultados", "Sim, mas não tive boa experiência", "Nunca realizei, sou iniciante"]
  },
  {
    id: 3,
    question: "Qual sua maior preocupação em relação ao procedimento?",
    options: ["Medo de ficar artificial", "Medo de sentir dor", "Preço/Investimento", "Não saber o que preciso fazer"]
  },
  {
    id: 4,
    question: "Onde você mora?",
    options: ["Praia Grande", "Santos / Baixada Santista", "Outra região"]
  }
];

export const WHY_TRUST_CARDS = [
  { title: "Avaliação Honesta", desc: "Só indico o que realmente trará benefícios reais para o seu rosto.", icon: "✨" },
  { title: "Atendimento Exclusivo", desc: "Você é atendida diretamente por mim, sem intermediários.", icon: "👩‍⚕️" },
  { title: "Naturalidade", desc: "Foco total em realçar sua beleza sem perder sua essência.", icon: "🌿" },
  { title: "Segurança", desc: "Utilizo apenas as melhores marcas e tecnologias do mercado.", icon: "🛡️" }
];
