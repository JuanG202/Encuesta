import ClinicLogo from './ClinicLogo';
import doctoraImg from '../assets/doctora.png';
import './WelcomeView.css';

export default function WelcomeView({ 
  onStart, 
  cedula, 
  eps, 
  onCedulaChange, 
  onEpsChange 
}) {

  const handleStartClick = () => {
    if (!cedula || !eps) {
      alert("Debes ingresar la cédula y seleccionar la EPS");
      return;
    }

    onStart();
  };

  return (
    <div className="welcome-view survey-view-enter">
      <div className="welcome-view__waves">
        <div className="wave wave--bottom" aria-hidden />
        <div className="wave wave--top" aria-hidden />
      </div>

      <div className="welcome-view__content">
        <div className="welcome-view__illustration" aria-hidden>
          <img
            src={doctoraImg}
            alt="Profesional de salud con clipboard"
            className="welcome-view__illustration-image"
          />
        </div>

        <div className="welcome-view__title-block">
          <h1 className="welcome-view__title">
            ENCUESTA DE<br />SATISFACCIÓN
          </h1>

          <div className="welcome-view__form">

            {/* CÉDULA */}
            <div className="welcome-view__field">
              <label className="welcome-view__label" htmlFor="cedula">
                Número de cédula
              </label>
              <input
                id="cedula"
                name="cedula"
                type="text"
                value={cedula}
                onChange={(e) => onCedulaChange(e.target.value)}
                className="welcome-view__input"
                placeholder="Digite la cédula del paciente"
              />
            </div>

            {/* EPS */}
            <div className="welcome-view__field">
              <label className="welcome-view__label" htmlFor="eps">
                EPS a la que pertenece
              </label>
              <select
                id="eps"
                name="eps"
                value={eps}
                onChange={(e) => onEpsChange(e.target.value)}
                className="welcome-view__input"
              >
                <option value="">Seleccione su EPS</option>
                <option value="Nueva EPS">Nueva EPS</option>
                <option value="Emssanar">Emssanar</option>
                <option value="Particular">Particular</option>
              </select>
            </div>

          </div>

          <button
            type="button"
            className="welcome-view__cta"
            onClick={handleStartClick}
          >
            COMENZAR<br />ENCUESTA
          </button>

        </div>
      </div>

      <div className="welcome-view__footer">
        <ClinicLogo variant="light" />
      </div>
    </div>
  );
}