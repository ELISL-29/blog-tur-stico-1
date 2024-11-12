import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css';

export const Results = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://673271fc2a1b1a4ae10ff8cd.mockapi.io/blog/${id}`);
      setLocations(locations.filter(location => location.id !== id));
      alert('Blog eliminado exitosamente');
    } catch (error) {
      console.error('Error eliminando el blog:', error);
      alert('Error eliminando el blog');
    }
  };

  return (
    <div className="container">
      <div className="results">
        <button className="create-blog-button" onClick={() => navigate('/create-blog')}>
          Crear Blog
        </button>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ubicación</th>
              <th>Reseña</th>
              <th>Calificación</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {locations.length === 0 ? (
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td colSpan="6" className="empty-row"></td>
                </tr>
              ))
            ) : (
              locations.map((location) => (
                <tr key={location.id}>
                  <td>{location.name}</td>
                  <td>{location.location}</td>
                  <td>{location.review}</td>
                  <td>{location.rating}</td>
                  <td><img src={location.imageUrl} alt={location.name} style={{ width: '100px', height: '100px' }} /></td>
                  <td>
                    <button onClick={() => navigate(`/edit-blog/${location.id}`)}>Editar</button>
                    <button onClick={() => handleDelete(location.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};