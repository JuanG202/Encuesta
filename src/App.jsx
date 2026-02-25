import { useState } from 'react';
import WelcomeView from './components/WelcomeView';
import QuestionRecommendView from './components/QuestionRecommendView';
import QuestionExperienceView from './components/QuestionExperienceView';
import ThankYouView from './components/ThankYouView';
import ResultsView from './components/ResultsView';
import './App.css';

const STEPS = {
  WELCOME: 'welcome',
  QUESTION_RECOMMEND: 'question_recommend',
  QUESTION_EXPERIENCE: 'question_experience',
  THANK_YOU: 'thank_you',
  RESULTS: 'results',
};

export default function App() {
  const [step, setStep] = useState(STEPS.WELCOME);

  // 🔥 AGREGAMOS cedula y eps
  const [answers, setAnswers] = useState({
    cedula: '',
    eps: '',
    recommend: '',
    experience: '',
  });

  const handleStart = () => setStep(STEPS.QUESTION_EXPERIENCE);

  // 🔥 NUEVAS FUNCIONES
  const handleCedula = (value) =>
    setAnswers((a) => ({ ...a, cedula: value }));

  const handleEps = (value) =>
    setAnswers((a) => ({ ...a, eps: value }));

  const handleExperience = (value) =>
    setAnswers((a) => ({ ...a, experience: value }));

  const handleExperienceNext = () =>
    setStep(STEPS.QUESTION_RECOMMEND);

  const handleRecommend = (value) =>
    setAnswers((a) => ({ ...a, recommend: value }));

  // 🔥 AQUÍ SE CONECTA CON TU BACKEND REAL
  const handleRecommendNext = async () => {
    try {

      console.log("Datos enviados:", answers);
      await fetch('http://localhost:4000/api/encuestas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      setStep(STEPS.THANK_YOU);
    } catch (error) {
      console.error('Error enviando encuesta:', error);
      alert('Error al guardar la encuesta');
    }
  };

  const handleViewResults = () => setStep(STEPS.RESULTS);

  const handleRestart = () => {
    setStep(STEPS.WELCOME);
    setAnswers({
      cedula: '',
      eps: '',
      recommend: '',
      experience: '',
    });
  };

  if (step === STEPS.WELCOME) {
    return (
      <WelcomeView
        onStart={handleStart}
        cedula={answers.cedula}
        eps={answers.eps}
        onCedulaChange={handleCedula}
        onEpsChange={handleEps}
      />
    );
  }

  if (step === STEPS.QUESTION_RECOMMEND) {
    return (
      <QuestionRecommendView
        value={answers.recommend}
        onChange={handleRecommend}
        onNext={handleRecommendNext}
      />
    );
  }

  if (step === STEPS.QUESTION_EXPERIENCE) {
    return (
      <QuestionExperienceView
        value={answers.experience}
        onChange={handleExperience}
        onNext={handleExperienceNext}
      />
    );
  }

  if (step === STEPS.THANK_YOU) {
    return (
      <ThankYouView
        onViewResults={handleViewResults}
        onRestart={handleRestart}
      />
    );
  }

  if (step === STEPS.RESULTS) {
    return (
      <ResultsView
        answers={answers}
        onBack={handleRestart}
      />
    );
  }

  return null;
}