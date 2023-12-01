import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import '../styles/Events.css';
import small from '../assets/small.jpg';

const Events = () => {
  const eventData = [
    {
      title: 'ISTVÁN, A KIRÁLY - 40. ÉVES JUBILEUMI KONCERT',
      location: 'Audi Aréna, Győr',
      date: '2023. december 30.',
    },
    {
        title: 'ISTVÁN, A KIRÁLY - 40. ÉVES JUBILEUMI KONCERT',
        location: 'Audi Aréna, Győr',
        date: '2023. december 30.',
      },
      {
        title: 'ISTVÁN, A KIRÁLY - 40. ÉVES JUBILEUMI KONCERT',
        location: 'Audi Aréna, Győr',
        date: '2023. december 30.',
      },
  ];

  return (
    <div>
      <Search />
      <h2 className="title">Kiemelt Ajánlatok</h2>
      <div className="contents">
        {eventData.map((event, index) => (
          <Link to="/details" key={index} className="content">
            <img className="small" src={small} alt="nothing" />
            <p>{event.title}</p>
            <p className="date">{event.location + ' ' + event.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
