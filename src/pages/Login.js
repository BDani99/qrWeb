import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginApi from '../api/login.js';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const result = await loginApi(formData.email, formData.password);
  
      if (result.success) {
        console.log('Sikeres bejelentkezés');
        onLogin();
  
        if (result.data.token) {
          sessionStorage.setItem('userId', result.data.id);
          sessionStorage.setItem('accessToken', result.data.token);
        }
  
        if (result.data.admin) {
          history.push('/');
          console.log('Admin belépés');
        } else {
          history.push('/');
        }
      } else {
        console.error('Bejelentkezés sikertelen:', result.error);
      }
    } catch (error) {
      console.error('Hiba a bejelentkezés során:', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="title2">Bejelentkezés</h1>
      <form className="input-container" onSubmit={handleSubmit}>
        <label className="login-label">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            placeholder="Email"
          />
        </label>
        <br />
        <label className="login-label">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            placeholder="Jelszó"
          />
        </label>
        <br />
        <button type="submit" className="login-button">
          Bejelentkezés
        </button>
        <p className="login-link">
          Még nincs fiókja? <Link to="/registration">Regisztráljon itt</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
