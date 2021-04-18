import './add-card.scss';
import React, {useState} from 'react';
import {addToDo} from '../../operations/mutations/mutations';

const initialState = {title: '', text: ''};
export const AddCard = React.memo(() => {
    const [card, setCard] = useState(initialState);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (card && card.title) {
            addToDo({...card});
            setCard(initialState)
        }
    };

    const handleFieldChange = (event) => {
        setCard(prevCard => ({...prevCard, [event.target.name]: event.target.value}));
    };

    return (
        <form className="add-card" onSubmit={handleFormSubmit}>
            <div className="form-input">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" onChange={handleFieldChange} value={card.title}/>
            </div>
            <div className="form-input">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="text" rows="4" onChange={handleFieldChange} value={card.text}/>
            </div>
            <button className="add-card-button" type="submit">Create Todo</button>
        </form>
    );
});
