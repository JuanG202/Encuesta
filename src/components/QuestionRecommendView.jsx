import ClinicLogo from './ClinicLogo';
import '../styles/QuestionView.css';

const OPTIONS = [
  'Definitivamente SI',
  'Probablemente SI',
  'Probablemente NO',
  'Definitivamente NO',
];

export default function QuestionRecommendView({ value, onChange, onNext }) {
  return (
    <div className="question-view survey-view-enter">
      <div className="question-view__deco question-view__deco--tl" aria-hidden />
      <div className="question-view__deco question-view__deco--br" aria-hidden />

      <div className="question-view__inner">
        <h2 className="question-view__title">
          ¿RECOMENDARÍA LA CLÍNICA DE LA VISIÓN DEL VALLE A SUS FAMILIARES Y AMIGOS?
        </h2>

        <div className="question-view__options question-view__options--grid-4">
          {OPTIONS.map((label) => (
            <button
              key={label}
              type="button"
              className={`option-btn ${value === label ? 'option-btn--selected' : ''}`}
              onClick={() => onChange(label)}
            >
              {label}
            </button>
          ))}
        </div>

        {value && (
          <button
            type="button"
            className="question-view__next"
            onClick={onNext}
          >
            Continuar
          </button>
        )}
      </div>

      <footer className="question-view__footer">
        <ClinicLogo variant="dark" />
      </footer>
    </div>
  );
}
