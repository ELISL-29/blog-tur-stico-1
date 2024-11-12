import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://673271fc2a1b1a4ae10ff8cd.mockapi.io/user', { email, password });
      alert('Inicio de sesión exitoso');
      navigate('/results'); // Redireccionar a la página de resultados
    } catch (error) {
      console.error('Error iniciando sesión:', error);
      alert('Error iniciando sesión');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Iniciar Sesión</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <button type="button" onClick={() => navigate('/register')}>Registrarse</button>
      </form>
    </div>
  );
};