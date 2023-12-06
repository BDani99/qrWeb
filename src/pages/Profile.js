import React, { useState, useEffect } from 'react';
import getCurrentUser from '../api/me';
import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

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

  const renderProfileFields = () => {
    return (
      <div className="Profile">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={userData.email} readOnly />
        </div>
        <div>
          <label htmlFor="name">Név:</label>
          <input type="text" id="name" value={userData.name} readOnly />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Születési dátum:</label>
          <input type="text" id="dateOfBirth" value={userData.dateOfBirth} readOnly />
        </div>
        <div>
          <label htmlFor="placeOfBirth">Születési hely:</label>
          <input type="text" id="placeOfBirth" value={userData.placeOfBirth} readOnly />
        </div>
        <div>
          <label htmlFor="address">Lakcím:</label>
          <input type="text" id="address" value={userData.address} readOnly />
        </div>
        <button onClick={() => alert('Mentés gombra kattintva!')}>Mentés</button>
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
