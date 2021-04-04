import './card-list.scss';
import {Card} from '../card/card';

export const CardList = ({cards, handleRemoveCard}) => {
    return (
        <div className='card-list'>
            {cards.map(card => <Card key={card.id} {...card} onRemoveCard={handleRemoveCard} />)}
        </div>
    )
};
