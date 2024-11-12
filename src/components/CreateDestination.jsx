import { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

export const CreateDestination = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleCreateDestination = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog', { name, location, review, rating, image });
      alert('Destination creado exitosamente');
      navigate('/Results');
    } catch (error) {
      console.error('Error creando el Destination:', error);
      alert('Error creando el Destination');
    }
  };

  return (
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
            max="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Blog</button>
      </form>
    </div>
  );
};