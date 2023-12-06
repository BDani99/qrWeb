import React, { useEffect, useState } from 'react';
import fetchEvents from '../api/events';
import { Link } from 'react-router-dom';
import '../styles/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchEvents();

        if (result.success) {
          setEvents(result.events);
        } else {
          setError(result.error);
        }

        setLoading(false);
      } catch (error) {
        console.error('Hiba az események lekérdezésekor:', error);
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
    <div>
      <h1 className="title">Események</h1>
      <div className="events-container">
        <div className="events-list">
          {events.map((event) => (
            <Link to={`/details/${event.id}`} key={event.id} className="content">
              <div className="event-item">
                {event.image && (
                  <img
                    src={`data:image/png;base64,${event.image}`}
                    alt="Event Image"
                    className="event-image"
                  />
                )}
                <p>{event.name}</p>
                <p>{event.dateOfEvent} - {event.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
