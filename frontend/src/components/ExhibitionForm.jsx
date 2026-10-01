import { useEffect, useState } from "react";
import { createExhibition, updateExhibition } from "../services/api";

function ExhibitionForm({
  onCreated,
  editingExhibition,
  onEditFinished
}) {
  const [form, setForm] = useState({
    title: "",
    artist: "",
    location: "",
    date: ""
  });

  useEffect(() => {
    if (editingExhibition) {
      setForm({
        title: editingExhibition.title,
        artist: editingExhibition.artist,
        location: editingExhibition.location,
        date: editingExhibition.date
      });
    }
  }, [editingExhibition]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = editingExhibition
    ? await updateExhibition(editingExhibition._id, form)
    : await createExhibition(form);

    if (response.status === 200 || response.status === 201) {
      onCreated();

      if (editingExhibition) {
        onEditFinished();
        }
    }   

  setForm({
    title: "",
    artist: "",
    location: "",
    date: ""
  });
};

  return (
    <form className="exhibition-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="artist"
        placeholder="Artista"
        value={form.artist}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Lugar"
        value={form.location}
        onChange={handleChange}
      />

      <input
        name="date"
        placeholder="Fecha"
        value={form.date}
        onChange={handleChange}
      />

      <button type="submit">
        {editingExhibition ? "Guardar cambios" : "Añadir exposición"}
      </button>
    </form>
  );
}

export default ExhibitionForm;