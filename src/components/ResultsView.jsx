import { useEffect, useState } from "react";
import ClinicLogo from "./ClinicLogo";
import "../styles/ResultsView.css";

export default function ResultsView({ onBack }) {
  const [encuestas, setEncuestas] = useState([]);
  const [filters, setFilters] = useState({
    cedula: "",
    eps: "all",
    sede: "all",
    recommend: "all",
    experience: "all",
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/encuestas")
      .then((res) => res.json())
      .then((data) => setEncuestas(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const uniqueValues = (key) => {
    const values = encuestas
      .map((encuesta) => encuesta[key])
      .filter(Boolean);
    return Array.from(new Set(values));
  };

  const filteredEncuestas = encuestas.filter((encuesta) => {
    const matchCedula =
      !filters.cedula ||
      String(encuesta.cedula || "").includes(filters.cedula);
    const matchEps =
      filters.eps === "all" || encuesta.eps === filters.eps;
    const matchSede =
      filters.sede === "all" || encuesta.sede === filters.sede;
    const matchRecommend =
      filters.recommend === "all" ||
      encuesta.recommend === filters.recommend;
    const matchExperience =
      filters.experience === "all" ||
      encuesta.experience === filters.experience;

    return (
      matchCedula &&
      matchEps &&
      matchSede &&
      matchRecommend &&
      matchExperience
    );
  });

  return (
    <div className="results-view survey-view-enter">
      <h1 className="results-view__title">RESULTADOS DE LA ENCUESTA</h1>

      <div className="results-view__table-wrapper">
        <div className="results-view__filters">
          <div className="results-view__filters-row">
            <div className="results-view__filter">
              <label className="results-view__filter-label" htmlFor="filter-cedula">
                Buscar por cédula
              </label>
              <input
                id="filter-cedula"
                type="text"
                className="results-view__filter-input"
                placeholder="Ej: 1234567890"
                value={filters.cedula}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    cedula: e.target.value,
                  }))
                }
              />
            </div>

            <div className="results-view__filter">
              <label className="results-view__filter-label" htmlFor="filter-eps">
                EPS
              </label>
              <select
                id="filter-eps"
                className="results-view__filter-input"
                value={filters.eps}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    eps: e.target.value,
                  }))
                }
              >
                <option value="all">Todas</option>
                {uniqueValues("eps").map((eps) => (
                  <option key={eps} value={eps}>
                    {eps}
                  </option>
                ))}
              </select>
            </div>

            <div className="results-view__filter">
              <label className="results-view__filter-label" htmlFor="filter-sede">
                Sede
              </label>
              <select
                id="filter-sede"
                className="results-view__filter-input"
                value={filters.sede}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sede: e.target.value,
                  }))
                }
              >
                <option value="all">Todas</option>
                {uniqueValues("sede").map((sede) => (
                  <option key={sede} value={sede}>
                    {sede}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="results-view__filters-row">
            <div className="results-view__filter">
              <label
                className="results-view__filter-label"
                htmlFor="filter-recommend"
              >
                Recomienda
              </label>
              <select
                id="filter-recommend"
                className="results-view__filter-input"
                value={filters.recommend}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    recommend: e.target.value,
                  }))
                }
              >
                <option value="all">Todas</option>
                {uniqueValues("recommend").map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="results-view__filter">
              <label
                className="results-view__filter-label"
                htmlFor="filter-experience"
              >
                Experiencia
              </label>
              <select
                id="filter-experience"
                className="results-view__filter-input"
                value={filters.experience}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    experience: e.target.value,
                  }))
                }
              >
                <option value="all">Todas</option>
                {uniqueValues("experience").map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

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
              {filteredEncuestas.map((encuesta, index) => (
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