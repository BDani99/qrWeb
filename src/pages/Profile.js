import React, { useEffect, useState } from 'react';
import api from '../api/me';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = sessionStorage.getItem('accessToken');
        const userId = sessionStorage.getItem('userId'); // Új sor: userId lekérése a sessionStorage-ból
        console.log("token: " + accessToken)
        
        if (!accessToken) {
          setError('Access token not available');
          setLoading(false);
          return;
        }

        const result = await api.getCurrentUser(accessToken, userId); // Módosítás: userId paraméter átadása a getCurrentUser függvénynek
        
        if (result.success) {
          setUserData(result.user);
          
        } else {
          setError(result.error || 'Unknown error');
        }

        setLoading(false);
      } catch (error) {
        console.error('Hiba a profil adatok lekérdezésekor:', error);
        setError('Hiba a szerverrel való kommunikáció során');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="title">Profil</h1>
      <div className="line"></div>
      <div className="profile-info">
        <p>ID: {userData.id}</p>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <p>Date of Birth: {userData.dateOfBirth}</p>
        <p>Address: {userData.address}</p>
        <p>Place of Birth: {userData.placeOfBirth}</p>
      </div>
    </div>
  );
};

export default Profile;
