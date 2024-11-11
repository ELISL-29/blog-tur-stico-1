import { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://673271fc2a1b1a4ae10ff8cd.mockapi.io/user', { name, email, password, createdAt: new Date().toString  });
      alert('Usuario registrado exitosamente');
      navigate('/results');
    } catch (error) {
      console.error('Error registrando usuario:', error);
      alert('Error registrando usuario');
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <h1>Registro</h1>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}