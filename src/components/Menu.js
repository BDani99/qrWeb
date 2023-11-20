import React from 'react';
import { Link } from 'react-router-dom'; // Importáljuk a Link komponenst
import '../styles/Menu.css';

const Menu = () => {
  const menuItems = ["Események", "Jegyeim", "Profil", "Információk", "Kapcsolat"];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <Link to={`/${item.toLowerCase()}`} key={index} className="menu-item">
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
