import logoClinica from '../assets/clinicavision.jpg';
import './ClinicLogo.css';

export default function ClinicLogo({ variant = 'dark' }) {
  return (
    <div className={`clinic-logo clinic-logo--${variant}`}>
      <img
        className="clinic-logo__image"
        src={logoClinica}
        alt="Clínica de la Visión del Valle S.A.S."
      />
    </div>
  );
}
