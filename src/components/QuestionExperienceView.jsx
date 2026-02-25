import ClinicLogo from './ClinicLogo';
import '../styles/QuestionView.css';
import '../styles/QuestionExperienceView.css';

const RATINGS = [
  { value: 'Muy bueno', emoji: '😊', color: '#eab308' },
  { value: 'Bueno', emoji: '😄', color: '#22c55e' },
  { value: 'Regular', emoji: '😐', color: '#f97316' },
  { value: 'Malo', emoji: '😕', color: '#ef4444' },
  { value: 'Muy malo', emoji: '😠', color: '#b91c1c' },
];

export default function QuestionExperienceView({ value, onChange, onNext }) {
  return (
    <div className="question-view survey-view-enter">
      <div className="question-view__deco question-view__deco--tl" aria-hidden />
      <div className="question-view__deco question-view__deco--br" aria-hidden />

      <div className="question-view__inner">
        <h2 className="question-view__title question-view__title--long">
          ¿CÓMO CALIFICARÍA SU EXPERIENCIA GENERAL CON LOS SERVICIOS RECIBIDOS EN LA CLÍNICA DE LA VISIÓN DEL VALLE?
        </h2>

        <div className="experience-options">
          {RATINGS.map(({ value: optionValue, emoji, color }) => (
            <button
              key={optionValue}
              type="button"
              className={`experience-option ${value === optionValue ? 'experience-option--selected' : ''}`}
              onClick={() => onChange(optionValue)}
              style={{ '--option-color': color }}
            >
              <span className="experience-option__emoji" role="img" aria-label={optionValue}>
                {emoji}
              </span>
              <span className="experience-option__label">{optionValue}</span>
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
