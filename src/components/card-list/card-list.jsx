import './card-list.scss';
import React from 'react';
import {Card} from '../card/card';

export const CardList = React.memo(({cards, handleRemoveCard}) => {
    return (
        <div className="card-list">
            {cards?.length ?
                cards.map(card => <Card key={card.id} {...card} onRemoveCard={handleRemoveCard}/>)
                : ''}
        </div>
    )
});
