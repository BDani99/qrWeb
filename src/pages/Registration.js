import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api/register';
import '../styles/Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    dateOfBirth: '',
    address: '',
    placeOfBirth: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await api.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        dateOfBirth: formData.dateOfBirth,
        address: formData.address,
        placeOfBirth: formData.placeOfBirth,
      });

      if (result.success) {
        console.log('Sikeres regisztráció:', result);
        history.push('/login');
      } else {
        console.error('Regisztráció sikertelen:', result.error);
      }
    } catch (error) {
      console.error('Hiba a regisztráció során:', error);
    }
  };


  return (
    <div className="reg-container">
      <h1 className="title2">Regisztráció</h1>
      <form className="reg-form" onSubmit={handleSubmit}>
        <label className="reg-label">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="reg-input"
            placeholder="Név"
          />
        </label>
        <br />
        <label className="reg-label">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="reg-input"
            placeholder="Email"
          />
        </label>
        <br />
        <label className="reg-label">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="reg-input"
            placeholder="Jelszó"
          />
        </label>
        <br />
        <label className="reg-label">
          <input
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="reg-input"
            placeholder="Születési dátum (YYYY-MM-DD)"
          />
        </label>
        <br />
        <label className="reg-label">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="reg-input"
            placeholder="Lakcím"
          />
        </label>
        <br />
        <label className="reg-label">
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="reg-input"
            placeholder="Születési hely"
          />
        </label>
        <br />
        <button type="submit" className="reg-button">
          Regisztráció
        </button>
      </form>
    </div>
  );
};

export default Registration;
