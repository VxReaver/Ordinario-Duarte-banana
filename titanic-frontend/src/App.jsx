import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="content">
        <h1 className="title">Titanic Explorer</h1>
        <p className="subtitle">
          Consulta información real de pasajeros del Titanic
        </p>

        <div className="searchBox">
          <input
            type="text"
            placeholder="Buscar pasajero por nombre..."
            className="input"
          />
          <button className="btn">Buscar</button>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Nombre del pasajero</h3>
            <p>
              <strong>Edad:</strong> --
            </p>
            <p>
              <strong>Género:</strong> --
            </p>
            <p>
              <strong>Clase:</strong> --
            </p>
          </div>

          <div className="card">
            <h3>Nombre del pasajero</h3>
            <p>
              <strong>Edad:</strong> --
            </p>
            <p>
              <strong>Género:</strong> --
            </p>
            <p>
              <strong>Clase:</strong> --
            </p>
          </div>
        </div>

        <div className="detail">
          <h2>Detalle del pasajero</h2>
          <p>
            <strong>Nombre:</strong> --
          </p>
          <p>
            <strong>Edad:</strong> --
          </p>
          <p>
            <strong>Sexo:</strong> --
          </p>
          <p>
            <strong>Clase:</strong> --
          </p>
          <p>
            <strong>Sobrevivió:</strong> --
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
