// Header.js
import React from 'react';
import Menu from '../components/Menu';
import logoutApi from '../api/logout';
import '../styles/header.css';

const Header = () => {
  const handleLogout = async () => {
    const userId = sessionStorage.getItem('userId');

    try {
      const result = await logoutApi(userId);

      if (result.success) {
        console.log('Felhasználó kijelentkezett');
      } else {
        console.error('Sikertelen kijelentkezés:', result.error);
      }
    } catch (error) {
      console.error('Hiba a kijelentkezés során:', error);
    }
  };

  return (
    <header>
      <div className='menuc'>
        <Menu />
      </div>
      <div>
        <button className='logout-button' onClick={handleLogout}>Kijelentkezés</button>
      </div>
    </header>
  );
};

export default Header;
