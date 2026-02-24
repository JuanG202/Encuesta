import ClinicLogo from './ClinicLogo';
import doctoraImg from '../assets/doctora.png';
import './WelcomeView.css';

export default function WelcomeView({ onStart }) {
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
            <div className="welcome-view__field">
              <label className="welcome-view__label" htmlFor="cedula">
                Número de cédula
              </label>
              <input
                id="cedula"
                name="cedula"
                type="text"
                className="welcome-view__input"
                placeholder="Digite la cédula del paciente"
              />
            </div>
            <div className="welcome-view__field">
              <label className="welcome-view__label" htmlFor="eps">
                EPS a la que pertenece
              </label>
              <select
                id="eps"
                name="eps"
                type="text"
                className="welcome-view__input"
                placeholder="Digite la EPS"
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
            onClick={onStart}
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
