import React, { useState, useEffect } from 'react';
import getCurrentUser from '../api/me';
import updateUserData from '../api/settings'
import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    const userId = sessionStorage.getItem('userId');

    if (!accessToken || !userId) {
      setError('Access token or user ID not found');
      return;
    }

    const fetchUserData = async () => {
      try {
        const result = await getCurrentUser(accessToken, userId);

        if (result.success) {
          setUserData(result.user);
        } else {
          setError(result.error);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const result = await updateUserData(sessionStorage.getItem('accessToken'), sessionStorage.getItem('userId'), {
        email: userData.email,
        name: userData.name,
        dateOfBirth: userData.dateOfBirth,
        placeOfBirth: userData.placeOfBirth,
        address: userData.address,
      });

      if (result.success) {
        console.log('User data updated successfully');
        setSuccessMessage('Sikeres Mentés!');
      } else {
        console.error('Error updating user data:', result.message);
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error('Error updating user data:', error.message);
      setSuccessMessage(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const renderProfileFields = () => {
    return (
      <div className="Profile">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="name">Név:</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Születési dátum:</label>
          <input type="text" id="dateOfBirth" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="placeOfBirth">Születési hely:</label>
          <input type="text" id="placeOfBirth" name="placeOfBirth" value={userData.placeOfBirth} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="address">Lakcím:</label>
          <input type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} />
        </div>
        <button onClick={handleSave}>Mentés</button>
        {successMessage && <p style={{ color: 'green', marginTop: 25}}>{successMessage}</p>}
      </div>
    );
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='title'>Profil</h1>
      {renderProfileFields()}
    </div>
  );
};

export default Profile;
