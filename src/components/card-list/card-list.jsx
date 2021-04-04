import './card-list.scss';
import {Card} from '../card/card';
import {useEffect, useState} from 'react';
import cardsData from '../../cards.json';

export const CardList = () => {
    const [cards, setCards] = useState([]);
    const handleRemoveCard = id => {
        setCards(cards.filter(card => card.id !== id));
    };

    useEffect(() => {
        setCards(cardsData.cards);
    }, []);

    return (
        <div className='card-list'>
            {cards.map(card => <Card key={card.id} {...card} onRemoveCard={handleRemoveCard} />)}
        </div>
    )
};
