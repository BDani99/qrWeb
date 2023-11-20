import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Menu.css';

function MenuItem({ text, to, isSelected, onSelect }) {
  const menuItemClass = isSelected ? "menu-item selected" : "menu-item";
  
  return (
    <Link to={to} className={menuItemClass} onClick={() => onSelect(text)}>
      {text}
    </Link>
  );
}

function Menu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedMenuItem");
    
    if (storedItem) {
      setSelectedMenuItem(storedItem);
    }
  }, []);

  useEffect(() => {
    const isMenuPage = menuItems.some(item => item.to === location.pathname);

    if (!isMenuPage) {
      setSelectedMenuItem("");
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("selectedMenuItem", selectedMenuItem);
  }, [selectedMenuItem]);

  const menuItems = [
    { text: 'Események', to: '/' },
    { text: 'Jegyeim', to: '/jegyeim' },
    { text: 'Profil', to: '/profil' },
    { text: 'Információk', to: '/információk' },
    { text: 'Kapcsolat', to: '/kapcsolat' },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          text={item.text}
          to={item.to}
          isSelected={selectedMenuItem === item.text}
          onSelect={(text) => setSelectedMenuItem(text)}
        />
      ))}
    </div>
  );
}

export default Menu;
