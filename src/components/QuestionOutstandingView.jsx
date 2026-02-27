import ClinicLogo from './ClinicLogo';
import '../styles/QuestionView.css';

const YES_NO_OPTIONS = ['Sí', 'No'];

export default function QuestionOutstandingView({
  value,
  staffName,
  area,
  onValueChange,
  onStaffNameChange,
  onAreaChange,
  onNext,
}) {
  const handleNextClick = () => {
    // Si respondió "Sí", opcionalmente podrías exigir al menos un campo
    // pero por ahora solo continuamos.
    onNext();
  };

  const showDetails = value === 'Sí';

  return (
    <div className="question-view survey-view-enter">
      <div className="question-view__deco question-view__deco--tl" aria-hidden />
      <div className="question-view__deco question-view__deco--br" aria-hidden />

      <div className="question-view__inner">
        <h2 className="question-view__title">
          En nuestra institución creemos que reconocer el buen servicio fortalece la cultura
          de humanización y seguridad del paciente.
        </h2>

        <p className="question-view__text">
          Si algún colaborador hizo que su experiencia fuera especialmente positiva, nos gustaría
          saberlo para felicitarlo.
        </p>

        <h3 className="question-view__subtitle">
          ¿Recibió una atención que considere destacada?
        </h3>

        <div className="question-view__options question-view__options--grid-2">
          {YES_NO_OPTIONS.map((label) => (
            <button
              key={label}
              type="button"
              className={`option-btn ${value === label ? 'option-btn--selected' : ''}`}
              onClick={() => onValueChange(label)}
            >
              {label}
            </button>
          ))}
        </div>

        {showDetails && (
          <div className="question-view__form-extra">
            <div className="question-view__field">
              <label className="question-view__label">
                Nombre del colaborador (si lo recuerda)
              </label>
              <input
                type="text"
                className="question-view__input"
                value={staffName}
                onChange={(e) => onStaffNameChange(e.target.value)}
                placeholder="Ejemplo: Juan Pérez"
              />
            </div>

            <div className="question-view__field">
              <label className="question-view__label">
                Área o servicio
              </label>
              <input
                type="text"
                className="question-view__input"
                value={area}
                onChange={(e) => onAreaChange(e.target.value)}
                placeholder="Ejemplo: Consulta externa, Urgencias..."
              />
            </div>
          </div>
        )}

        {value && (
          <button
            type="button"
            className="question-view__next"
            onClick={handleNextClick}
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

