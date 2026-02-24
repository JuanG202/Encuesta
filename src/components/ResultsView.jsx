import ClinicLogo from './ClinicLogo';
import './ResultsView.css';

export default function ResultsView({ answers, onBack }) {
  return (
    <div className="results-view survey-view-enter">
      <div className="results-view__deco results-view__deco--tl" aria-hidden />
      <div className="results-view__deco results-view__deco--br" aria-hidden />

      <h1 className="results-view__title">RESULTADOS DE LA ENCUESTA</h1>

      <div className="results-view__card">
        <div className="results-view__row">
          <span className="results-view__label">¿Recomendaría la clínica?</span>
          <span className="results-view__value">{answers.recommend || '—'}</span>
        </div>
        <div className="results-view__row">
          <span className="results-view__label">Experiencia general</span>
          <span className="results-view__value">{answers.experience || '—'}</span>
        </div>
      </div>

      <button type="button" className="results-view__back" onClick={onBack}>
        Volver al inicio
      </button>

      <footer className="results-view__footer">
        <ClinicLogo variant="dark" />
      </footer>
    </div>
  );
}
