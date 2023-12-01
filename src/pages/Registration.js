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

  const [showCheckbox, setShowCheckbox] = useState(true);
  const [showButton] = useState(false);

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
        {showButton && (
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showCheckbox}
                onChange={() => setShowCheckbox(!showCheckbox)}
                className="checkbox-input"
              />
              Admin Regisztráció
            </label>
          </div>
        )}
        <br />
        {!showButton && (
          <button type="submit" className="reg-button">
            Regisztráció
          </button>   
        )}
        {showButton && (
        <button className='reg-button' onClick={() => console.log('Button clicked!')}>Regisztráció</button>
      )}
      </form>
    </div>
  );
};

export default Registration;
