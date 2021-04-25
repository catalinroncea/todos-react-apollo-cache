import {CardList} from '../../components/card-list/card-list';
import {useLazyQuery} from '@apollo/client';
import {GET_ALL_TODOS} from '../../operations/queries/queries';
import {removeToDo} from '../../operations/mutations/mutations';
import {useCallback, useEffect} from 'react';
import {AddCard} from '../../components/add-card/add-card';

export const CardsPage = () => {
    const [loadAllTodos, {data}] = useLazyQuery(GET_ALL_TODOS);
    const handleRemoveCard = useCallback(id => {
        removeToDo(id);
    }, []);
    const handleCardSaved = useCallback(async () => {
        loadAllTodos();
    }, [loadAllTodos]);

    useEffect(() => {
        loadAllTodos();
    }, [loadAllTodos])

    return (
        <div className="cards-page">
            <AddCard/>
            <CardList cards={data?.todos} handleRemoveCard={handleRemoveCard}
                      onCardSaved={handleCardSaved}/>
        </div>);
};
