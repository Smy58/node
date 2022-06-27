import Card from './Card';
import { useState } from 'react';
import { addCard } from './redux/actions';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';

function Cards(props: any) {
    const [cardText, setCardText] = useState('');

    const cards = useSelector((state: any) => {
        //console.log('redux state > ', state);
        const { cardsReducer } = state
        return cardsReducer.cards
    })
    console.log(cards);

    const dispatch = useDispatch();

    const handleInputChange = (e: any) => {
        setCardText(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(addCard(cardText, id));
    }
    
    return(
        <>
            <form onSubmit={handleSubmit} className='toDo__add-form'>
                <input type='text' className='toDo__input' value={cardText} onChange={handleInputChange}></input>
                <input type='submit' hidden></input>
            </form>
            <div className='cards'>
                {!!cards.length && cards.map((res: any) => {
                    return <Card key={res.id} data={res}/>
                })}
            </div>
        </>
    )
}

export default Cards;