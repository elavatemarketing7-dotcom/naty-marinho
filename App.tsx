
import React, { useState, useEffect } from 'react';
import { AppState, QuizAnswers } from './types';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import LandingPage from './components/LandingPage';
import InitialOverlay from './components/InitialOverlay';
import AnalyzingScreen from './components/AnalyzingScreen';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('INITIAL');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});

  // Scroll to top on state change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  const handleStartQuiz = () => setState('QUIZ');
  const handleSkipToSite = () => setState('SITE');
  
  const handleQuizFinish = (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setState('ANALYZING');
  };

  const handleAnalysisComplete = () => {
    setState('RESULT');
  };

  return (
    <div className="min-h-screen">
      {state === 'INITIAL' && (
        <InitialOverlay 
          onStartQuiz={handleStartQuiz} 
          onSkip={handleSkipToSite} 
        />
      )}
      
      {(state === 'QUIZ' || state === 'INITIAL') && (
        <div className={state === 'INITIAL' ? 'hidden' : 'block'}>
          <Quiz 
            onFinish={handleQuizFinish} 
            onSkip={handleSkipToSite} 
          />
        </div>
      )}

      {state === 'ANALYZING' && (
        <AnalyzingScreen onComplete={handleAnalysisComplete} />
      )}

      {state === 'RESULT' && (
        <QuizResult 
          answers={quizAnswers} 
          onContinue={handleSkipToSite} 
        />
      )}

      {state === 'SITE' && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
