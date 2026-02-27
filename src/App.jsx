import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import WelcomeView from './components/WelcomeView';
import QuestionRecommendView from './components/QuestionRecommendView';
import QuestionExperienceView from './components/QuestionExperienceView';
import QuestionOutstandingView from './components/QuestionOutstandingView';
import ThankYouView from './components/ThankYouView';
import ResultsView from './components/ResultsView';
import './App.css';

function AppRoutes() {
  const navigate = useNavigate();

  // Estado global de las respuestas
  const [answers, setAnswers] = useState({
    cedula: '',
    eps: '',
    sede: '',
    recommend: '',
    experience: '',
    outstanding: '',
    staffName: '',
    serviceArea: '',
  });

  const handleCedula = (value) =>
    setAnswers((a) => ({ ...a, cedula: value }));

  const handleEps = (value) =>
    setAnswers((a) => ({ ...a, eps: value }));

  const handleSede = (value) =>
    setAnswers((a) => ({ ...a, sede: value }));

  const handleExperience = (value) =>
    setAnswers((a) => ({ ...a, experience: value }));

  const handleRecommend = (value) =>
    setAnswers((a) => ({ ...a, recommend: value }));

  const handleOutstanding = (value) =>
    setAnswers((a) => ({ ...a, outstanding: value }));

  const handleStaffName = (value) =>
    setAnswers((a) => ({ ...a, staffName: value }));

  const handleServiceArea = (value) =>
    setAnswers((a) => ({ ...a, serviceArea: value }));

  const handleStart = () => {
    navigate('/experience', { replace: true });
  };

  const handleExperienceNext = () => {
    navigate('/recommend', { replace: true });
  };

  const handleViewResults = () => {
    navigate('/results', { replace: true });
  };

  const handleRestart = () => {
    setAnswers({
      cedula: '',
      eps: '',
      sede: '',
      recommend: '',
      experience: '',
      outstanding: '',
      staffName: '',
      serviceArea: '',
    });
    navigate('/', { replace: true });
  };

  // Ir a la pregunta de reconocimiento de buen servicio
  const handleRecommendNext = () => {
    navigate('/outstanding', { replace: true });
  };

  // Enviar al backend y luego ir a gracias
  const handleOutstandingNext = async () => {
    try {
      console.log('Datos enviados:', answers);
      await fetch('http://localhost:4000/api/encuestas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      navigate('/thank-you', { replace: true });
    } catch (error) {
      console.error('Error enviando encuesta:', error);
      alert('Error al guardar la encuesta');
    }
  };

  return (
    <Routes>
      {/* Inicio */}
      <Route
        path="/"
        element={(
          <WelcomeView
            onStart={handleStart}
            onViewResults={handleViewResults}
            cedula={answers.cedula}
            eps={answers.eps}
            sede={answers.sede}
            onCedulaChange={handleCedula}
            onEpsChange={handleEps}
            onSedeChange={handleSede}
          />
        )}
      />

      {/* Pregunta experiencia */}
      <Route
        path="/experience"
        element={(
          <QuestionExperienceView
            value={answers.experience}
            onChange={handleExperience}
            onNext={handleExperienceNext}
          />
        )}
      />

      {/* Pregunta recomendar */}
      <Route
        path="/recommend"
        element={(
          <QuestionRecommendView
            value={answers.recommend}
            onChange={handleRecommend}
            onNext={handleRecommendNext}
          />
        )}
      />

      {/* Reconocimiento de buen servicio */}
      <Route
        path="/outstanding"
        element={(
          <QuestionOutstandingView
            value={answers.outstanding}
            staffName={answers.staffName}
            area={answers.serviceArea}
            onValueChange={handleOutstanding}
            onStaffNameChange={handleStaffName}
            onAreaChange={handleServiceArea}
            onNext={handleOutstandingNext}
          />
        )}
      />

      {/* Pantalla de gracias */}
      <Route
        path="/thank-you"
        element={(
          <ThankYouView
            onViewResults={handleViewResults}
            onRestart={handleRestart}
          />
        )}
      />

      {/* Resultados */}
      <Route
        path="/results"
        element={(
          <ResultsView
            answers={answers}
            onBack={handleRestart}
          />
        )}
      />

      {/* Cualquier otra ruta redirige al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}