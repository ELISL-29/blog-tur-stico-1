import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Eliminar la sesión del usuario
    navigate('/'); // Redireccionar a la página de inicio de sesión
  };

  return (
    <header className="header">
      <h1>Journeys that leave footprints</h1>
      <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
    </header>
  );
}