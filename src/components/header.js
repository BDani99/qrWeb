import React from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../components/Menu';
import logoutApi from '../api/logout';
import '../styles/header.css';

const Header = () => {
  const history = useHistory();

  const handleLogout = async () => {
    const userId = sessionStorage.getItem('userId');
    const accessToken = sessionStorage.getItem('accessToken');
    console.log("token: " + accessToken);
    console.log("id: " + userId);

    try {
      const result = await logoutApi(userId, accessToken);

      if (result && result.success) {
        console.log('Felhasználó kijelentkezett');

        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('accessToken');
        console.log("removedtoken: " + accessToken);
        console.log("removedid: " + userId);

        history.push('/login');
      } else {
        console.error('Sikertelen kijelentkezés:', result && result.error);
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
        <button className='logout-button' onClick={handleLogout}>
          Kijelentkezés
        </button>
      </div>
    </header>
  );
};

export default Header;
