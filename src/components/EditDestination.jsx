import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

export const EditDestination = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(`https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog/${id}`);
        const destination = response.data;
        setName(destination.name);
        setLocation(destination.location);
        setReview(destination.review);
        setRating(destination.rating);
        setImage(destination.image);
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    fetchDestination();
  }, [id]);

  const handleEditDestination = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog/${id}`, { name, location, review, rating, image });
      alert('Destino actualizado exitosamente');
      navigate('/results');
    } catch (error) {
      console.error('Error actualizando el destino:', error);
      alert('Error actualizando el destino');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleEditDestination}>
        <h1>Editar Destino Turístico</h1>
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
        <button type="submit">Actualizar Destino</button>
      </form>
    </div>
  );
};