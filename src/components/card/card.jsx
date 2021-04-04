import './card.scss';
import {Link} from 'react-router-dom';

export const Card = ({id, title, text, onRemoveCard}) => (
  <div className='card'>
      <Link className='card-id' to={'/cards/' + id}>{id}</Link>
      <h2 className='card-title'>{title}</h2>
      <p className='card-text'>{text}</p>
      <div className='actions'>
        <button className='remove-card' onClick={() => onRemoveCard(id)}>Remove card</button>
      </div>
  </div>
);
