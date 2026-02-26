import { useEffect, useState } from "react";
import ClinicLogo from "./ClinicLogo";
import "../styles/ResultsView.css";

export default function ResultsView({ onBack }) {
  const [encuestas, setEncuestas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/encuestas")
      .then((res) => res.json())
      .then((data) => setEncuestas(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="results-view survey-view-enter">
      <h1 className="results-view__title">RESULTADOS DE LA ENCUESTA</h1>

      <div className="results-view__table-container">
        <table className="results-view__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Cédula</th>
              <th>EPS</th>
              <th>Sede</th>
              <th>Recomienda</th>
              <th>Experiencia</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {encuestas.map((encuesta, index) => (
              <tr key={encuesta._id}>
                <td>{index + 1}</td>
                <td>{encuesta.cedula}</td>
                <td>{encuesta.eps}</td>
                <td>{encuesta.sede}</td>
                <td>{encuesta.recommend}</td>
                <td>{encuesta.experience}</td>
                <td>
                  {new Date(encuesta.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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