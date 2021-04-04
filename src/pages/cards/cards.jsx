import {CardList} from '../../components/card-list/card-list';
import {useEffect, useState} from 'react';
import cardsData from '../../cards.json';

export const CardsPage = () => {
    const [cards, setCards] = useState([]);
    const handleRemoveCard = id => {
        setCards(cards.filter(card => card.id !== id));
    };

    useEffect(() => {
        setCards([...cardsData.cards]);
    }, []);

    return (<CardList cards={cards} handleRemoveCard={handleRemoveCard}/>);
};
