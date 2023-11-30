import React, { useEffect, useState } from 'react';
import api from '../api/me';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.getMe();

        if (result.success) {
          setUserData(result.user);
        } else {
          setError(result.error);
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
