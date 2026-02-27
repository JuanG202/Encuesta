import ClinicLogo from './ClinicLogo';
import doctoraImg from '../assets/doctora.png';
import '../styles/WelcomeView.css';

const RESULTS_PASSWORD = 'vision'; // cámbiala por la que quieras

export default function WelcomeView({ 
  onStart, 
  cedula, 
  eps,
  sede, 
  onCedulaChange, 
  onEpsChange,
  onViewResults,
  onSedeChange
  
})
{
 
  const handleStartClick = () => {
    if (!cedula || !eps || !sede) {
      alert("Debes ingresar la cédula, seleccionar la EPS y escoger una sede ");
      return;
    }

    onStart();
  };

  const handleViewResultsClick = () => {
    const value = window.prompt('Ingrese la contraseña para ver los resultados:');

    if (!value) {
      return;
    }

    if (value === RESULTS_PASSWORD) {
      onViewResults();
    } else {
      alert('Contraseña incorrecta');
    }
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

            {/* SEDE */}
            <div className="welcome-view__field">
              <label className="welcome-view__label" htmlFor="sede">
                Sede a la que pertenece
              </label>
              <select
                id="sede"
                name="sede"
                value={sede}
                onChange={(e) => onSedeChange(e.target.value)}
                className="welcome-view__input"
              >
                <option value="">Seleccione su Sede</option>
                <option value="Sede 1">Sede 1</option>
                <option value="Sede 2">Sede 2</option>
                <option value="Sede 4">Sede 4</option>
                <option value="Sede 5">Sede 5</option>
                <option value="Sede 6">Sede 6</option>
                <option value="Sede 7">Sede 7</option>
              </select>
            </div>


          </div>

          <div className="welcome-view__actions">
            <button
              type="button"
              className="welcome-view__cta"
              onClick={handleStartClick}
            >
              COMENZAR<br />ENCUESTA
            </button>

            <button
              type="button"
              className="welcome-view__cta welcome-view__cta--secondary"
              onClick={handleViewResultsClick}
            >
              VER<br />RESULTADOS
            </button>
          </div>
        </div>
      </div>

      <div className="welcome-view__footer">
        <ClinicLogo variant="light" />
      </div>
    </div>
  );
}