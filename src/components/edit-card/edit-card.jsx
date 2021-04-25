import './edit-card.scss';
import React, {useCallback, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useOutsideClickHandler} from '../../hooks/useOutsideClickHandler';

export const EditCard = React.memo(({id, title, text, onRemoveCard, onSaveCard, onClickOutside}) => {
    const ref = useRef(null);
    const [card, setCard] = useState({id, title, text});
    const clickedOutsideHandler = useCallback(() => {
        onClickOutside(card);
    }, [card, onClickOutside]);
    useOutsideClickHandler(ref, clickedOutsideHandler);

    const handleFieldChange = (event) => {
        setCard(prevCard => ({...prevCard, [event.target.name]: event.target.value}));
    };

    return (
        <div className='edit-card' ref={ref}>
            <Link className='card-id' to={'/cards/' + id}>{id}</Link>
            <input id="title" type="text" name="title" className='card-title' onChange={handleFieldChange} value={card.title}/>
            <textarea id="description" name="text" className='card-text' rows="4" onChange={handleFieldChange} value={card.text}/>
            <div className='actions'>
                <button className='save-card' onClick={() => onSaveCard(card)}>Save card</button>
                <button className='remove-card' onClick={() => onRemoveCard(id)}>Remove card</button>
            </div>
        </div>
    );
});
