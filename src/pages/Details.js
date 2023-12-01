import React from 'react';
import { useHistory } from 'react-router-dom';
import small from '../assets/small.jpg';
import '../styles/Details.css';

const Details = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/buying');
  };

  return (
    <div className="valami">
      <img className="cover" src={small} alt="nothing" />
      <div className="det">
        <p>ISTVÁN, A KIRÁLY - 40. ÉVES JUBILEUMI KONCERT</p>
        <p>Audi Aréna, Győr 2023. december 30.</p>
        <p className='desc'>Lorem ipsum dolor sit amet. Aut quisquam ipsum et quae officia quo voluptas distinctio est sequi dolorum non consequuntur dolor eum veniam molestiae! Qui reiciendis quidem ea dolores dignissimos a odit quidem qui animi quia quo temporibus libero! Ut provident earum non laborum natus eos voluptas enim sit dolorem sunt et veritatis perferendis est reprehenderit numquam id placeat voluptatem.
           Qui nesciunt sint ad esse perferendis sit voluptatem nesciunt est debitis inventore et vitae tempora et sequi internos. Ex quos inventore et excepturi consequatur est tempora temporibus sit laborum laborum aut nostrum possimus eos ratione corrupti et laboriosam iste. Et natus voluptates est consectetur voluptatem ab laborum molestias non repellat dolores eum rerum voluptatem et ratione dolore! Ab quae molestiae in culpa voluptatem ut laborum tempora aut unde nisi ut tempora similique.
           Cum doloribus facere est accusamus molestiae et explicabo modi sed dolore molestias. Ea possimus esse eos perferendis repellendus ut temporibus nisi.</p>
        <div>
        </div>
      </div>
      <button className='buy-button' onClick={handleButtonClick}>Vásárlás</button>
    </div>
  );
};

export default Details;
