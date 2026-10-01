import "./App.css";
import { useEffect, useState } from "react";
import { getExhibitions, deleteExhibition } from "./services/api";
import ExhibitionForm from "./components/ExhibitionForm";

function App() {
  const [exhibitions, setExhibitions] = useState([]);
  const [editingExhibition, setEditingExhibition] = useState(null);

  const loadExhibitions = () => {
    getExhibitions()
      .then((response) => {
        setExhibitions(response.data);
      })
      .catch((error) => {
        console.error("Error obteniendo exposiciones:", error);
      });
  };

  const handleDelete = async (id) => {
    await deleteExhibition(id);
    loadExhibitions();
  };

  useEffect(() => {
    loadExhibitions();
  }, []);

  return (
  <div>
    <header>
      <h1>Agenda de exposiciones</h1>

      <ExhibitionForm
        onCreated={loadExhibitions}
        editingExhibition={editingExhibition}
        onEditFinished={() => setEditingExhibition(null)}
      />
    </header>

    <main>
      {exhibitions.length === 0 ? (
        <p>No hay exposiciones todavía.</p>
      ) : (
        exhibitions.map((exhibition) => (
          <div className="exhibition-card" key={exhibition._id}>
            <h2>{exhibition.title}</h2>
            <p>{exhibition.artist}</p>
            <p>{exhibition.location}</p>
            <p>{exhibition.date}</p>

            <button onClick={() => setEditingExhibition(exhibition)}>
              Editar
            </button>

            <button onClick={() => handleDelete(exhibition._id)}>
              Eliminar
            </button>
          </div>
        ))
      )}
    </main>
  </div>
);
}
export default App;