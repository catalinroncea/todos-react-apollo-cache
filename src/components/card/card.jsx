import './card.scss';

export const Card = ({id, title, text, onRemoveCard}) => (
  <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <p className='card-text'>{text}</p>
      <div className='actions'>
        <button className='remove-card' onClick={() => onRemoveCard(id)}>Remove card</button>
      </div>
  </div>
);
