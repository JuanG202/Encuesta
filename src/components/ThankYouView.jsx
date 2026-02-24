import ClinicLogo from './ClinicLogo';
import './ThankYouView.css';

export default function ThankYouView({ onViewResults, onRestart }) {
  return (
    <div className="thankyou-view survey-view-enter">
      <div className="thankyou-view__deco thankyou-view__deco--tl" aria-hidden />
      <div className="thankyou-view__deco thankyou-view__deco--br" aria-hidden />

      <h1 className="thankyou-view__title">GRACIAS POR TU OPINION</h1>

      <div className="thankyou-view__actions">
        <button
          type="button"
          className="thankyou-view__btn"
          onClick={onViewResults}
        >
          VER<br />RESULTADOS
        </button>
        <button
          type="button"
          className="thankyou-view__btn thankyou-view__btn--secondary"
          onClick={onRestart}
        >
          VOLVER<br />AL INICIO
        </button>
      </div>

      <footer className="thankyou-view__footer">
        <ClinicLogo variant="dark" />
      </footer>
    </div>
  );
}
