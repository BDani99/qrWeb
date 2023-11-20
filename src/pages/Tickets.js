import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tickets.css';
import Azi from '../assets/Azi.jpg';
import qr from '../assets/qr.png';

const Tickets = () => {
  return (
    <div>
      <h2 className="title">Saját jegyek</h2>
      <div className="line"></div>
      <div className="content2">
        <Link to="/ticket" className="rectangle">
          <img className="left-image" src={Azi} alt="nothing" />
          <div className="text">
            <p>Azahriah Aréna koncert</p>
            <p>2023.03.10.</p>
          </div>
          <img className="right-image" src={qr} alt="nothing" />
        </Link>
      </div>
      <div className="content2">
        <Link to="/ticket" className="rectangle">
          <img className="left-image" src={Azi} alt="nothing" />
          <div className="text">
            <p>Azahriah Aréna koncert</p>
            <p>2023.03.10.</p>
          </div>
          <img className="right-image" src={qr} alt="nothing" />
        </Link>
      </div>
      <div className="content2">
        <Link to="/ticket" className="rectangle">
          <img className="left-image" src={Azi} alt="nothing" />
          <div className="text">
            <p>Azahriah Aréna koncert</p>
            <p>2023.03.10.</p>
          </div>
          <img className="right-image" src={qr} alt="nothing" />
        </Link>
      </div>
    </div>
  );
};

export default Tickets;
