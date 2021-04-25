import {useCallback, useState} from 'react';
import {saveToDo} from '../operations/mutations/mutations';

export const useEditCard = ({onCardSaved}) => {
    const [editedCardId, setEditedCardId] = useState(false);
    const handleCardTitleAndTextClick = useCallback((id) => {
        setEditedCardId(id);
    }, []);

    const saveCard = useCallback((card) => {
        const updatedCard = saveToDo(card);
        setEditedCardId(null);
        if (updatedCard.title !== card.title && updatedCard.text !== card.text) {
            onCardSaved(card.id);
        }
    }, [onCardSaved]);

    return {
        editedCardId,
        handleCardTitleAndTextClick,
        saveCard
    }
};
