
export type AppState = 'INITIAL' | 'QUIZ' | 'ANALYZING' | 'RESULT' | 'SITE';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizAnswers {
  [key: number]: string;
}
