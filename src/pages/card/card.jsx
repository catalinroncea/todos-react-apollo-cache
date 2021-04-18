import {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {Card} from '../../components/card/card';
import {useQuery} from '@apollo/client';
import {GET_TODO_BY_ID} from '../../operations/queries/queries';
import {removeToDo} from '../../operations/mutations/mutations';

export const CardPage = () => {
    const {id} = useParams();
    const todoResult = useQuery(GET_TODO_BY_ID, {variables: {id}});
    const [card, setCard] = useState();
    const history = useHistory();
    const handleRemoveCard = id => {
        removeToDo(id);
        history.push('/');
    };

    useEffect(() => {
        setCard(todoResult?.data?.todo);
    }, [todoResult]);

    return (
        <>
            <Link to={'/'}>Home</Link>
            <Card id={card?.id} {...card} onRemoveCard={handleRemoveCard}/>
        </>
    )
};
