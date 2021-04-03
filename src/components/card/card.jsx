import './card.scss';

export const Card = ({title, text}) => (
  <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <p className='card-text'>{text}</p>
  </div>
);
