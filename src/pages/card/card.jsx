import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {Card} from '../../components/card/card';
import {useQuery} from '@apollo/client';
import {GET_TODO_BY_ID} from '../../operations/queries/queries';
import {removeToDo} from '../../operations/mutations/mutations';
import './card.scss';
import {useEditCard} from '../../hooks/useEditCard';
import {EditCard} from '../../components/edit-card/edit-card';

export const CardPage = () => {
    const {id} = useParams();
    const todoResult = useQuery(GET_TODO_BY_ID, {variables: {id}});
    const [card, setCard] = useState();
    const history = useHistory();
    const handleRemoveCard = id => {
        removeToDo(id);
        history.push('/');
    };
    const onCardSaved = () => {

    };

    const {editedCardId, handleCardTitleAndTextClick, saveCard} = useEditCard(onCardSaved);

    useEffect(() => {
        setCard(todoResult?.data?.todo);
    }, [todoResult]);

    return (
        <>
            <Link className="link" to={'/'}>Home</Link>
            {editedCardId !== card?.id ? <Card key={card?.id} {...card}
                                               onRemoveCard={handleRemoveCard}
                                               onTitleClick={handleCardTitleAndTextClick}
                                               onTextClick={handleCardTitleAndTextClick}/>
                : <EditCard key={card?.id} {...card}
                            onClickOutside={saveCard}
                            onRemoveCard={handleRemoveCard}
                            onSaveCard={saveCard}/>
            }
        </>
    )
}
;
