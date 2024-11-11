import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

export const EditBlog = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog/${id}`);
        const blog = response.data;
        setName(blog.name);
        setLocation(blog.location);
        setReview(blog.review);
        setRating(blog.rating);
        setImage(blog.image);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleEditBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog/${id}`, { name, location, review, rating, image });
      alert('Blog actualizado exitosamente');
      navigate('/results');
    } catch (error) {
      console.error('Error actualizando el blog:', error);
      alert('Error actualizando el blog');
    }
  };

  return (
    <div className="edit-blog">
      <form onSubmit={handleEditBlog}>
        <h1>Editar Blog Turístico</h1>
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
        <button type="submit">Actualizar Blog</button>
      </form>
    </div>
  );
};