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
  const [answers, setAnswers] = useState({
    recommend: '',
    experience: '',
  });

  const handleStart = () => setStep(STEPS.QUESTION_EXPERIENCE);

  const handleExperience = (value) => setAnswers((a) => ({ ...a, experience: value }));
  const handleExperienceNext = () => setStep(STEPS.QUESTION_RECOMMEND);

  const handleRecommend = (value) => setAnswers((a) => ({ ...a, recommend: value }));
  const handleRecommendNext = () => setStep(STEPS.THANK_YOU);

  const handleViewResults = () => setStep(STEPS.RESULTS);
  const handleRestart = () => {
    setStep(STEPS.WELCOME);
    setAnswers({ recommend: '', experience: '' });
  };

  if (step === STEPS.WELCOME) {
    return <WelcomeView onStart={handleStart} />;
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
