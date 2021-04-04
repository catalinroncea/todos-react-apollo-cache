import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import cardsData from '../../cards.json';
import {Card} from '../../components/card/card';

export const CardPage = () => {
    const {id} = useParams();
    const [card, setCard] = useState({});

    useEffect(() => {
        setCard({...cardsData.cards.find(card => card.id = id)});
    }, [id]);

    return (
        <Card id={card.id} {...card}/>
    )
};
