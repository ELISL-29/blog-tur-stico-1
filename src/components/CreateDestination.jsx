import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export const CreateDestination = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  const handleCreateDestination = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.post(
        "https://673a385d339a4ce44517975b.mockapi.io/destinations",
        { name, location, review, rating, userId: user.id }
      );
      alert("Destino creado exitosamente");
      navigate("/Results");
    } catch (error) {
      console.error("Error creando el Destino:", error);
      alert("Error creando el Destino");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleCreateDestination}>
          <h1>Crear Destino Turístico</h1>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="review">Reseña</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Calificación</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              min="1"
              max="10"
            />
          </div>
          <button type="button">Crear Destino</button>
        </form>
      </div>
    </>
  );
};
