import './card-list.scss';
import React from 'react';
import {Card} from '../card/card';
import {EditCard} from '../edit-card/edit-card';
import {useEditCard} from '../../hooks/useEditCard';

export const CardList = React.memo(({cards, handleRemoveCard, onCardSaved}) => {
    const {editedCardId, handleCardTitleAndTextClick, saveCard} = useEditCard(onCardSaved);

    return (
        <div className="card-list">
            {cards?.length ? cards.map(card => {
                return editedCardId !== card.id ? <Card key={card.id} {...card}
                                                        onRemoveCard={handleRemoveCard}
                                                        onTitleClick={handleCardTitleAndTextClick}
                                                        onTextClick={handleCardTitleAndTextClick}/>
                    : <EditCard key={card.id} {...card}
                                onClickOutside={saveCard}
                                onRemoveCard={handleRemoveCard}
                                onSaveCard={saveCard}/>
            }) : ''}
        </div>
    )
});
