import React from 'react';
import Azi from '../assets/Azi.jpg';
import QR from '../assets/qr.png';
import '../styles/Ticket.css'

const Ticket = () => {
    return ( 
        <div className='Ticket'>
            <img className="cover" src={Azi} alt="nothing" />
            <div>
                <h2 className="title">Jegy Információk</h2>
                <div className="line"></div>
                <div className='koncert'>
                    <div>
                        <p>Vásárlás dátuma: 2023.10.12</p>
                        <p>Vásaárló neve: Minta Bence</p>
                        <p>Ár: 20000 Ft</p>
                        <p>Visszaváltható: nem</p>
                    </div>
                <img className='qr' src={QR} alt="nothing" />
                </div>
            </div>
            <div>
                <h2 className="title">Koncert információk</h2>
                <div className="line"></div>
                <div className='koncert'>
                    <div>
                        <p>Dátum: 2024.02.12</p>
                        <p>Kezdés időpontja: 21:00</p>
                        <p>Befejezés időpontja: 01:00</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Ticket;