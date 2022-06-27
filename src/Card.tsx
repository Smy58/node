import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCard, deleteCard } from "./redux/actions";


function Card({ data }: any) {
    const [cardText, setCardText] = useState('');
    const dispatch = useDispatch();
    const { text, id }: any = data;

    useEffect(() => {
        if(text) {
            setCardText(text);
        }
    }, [text]);

    const handlleInputChange = (e: any) => {
        setCardText(e.target.value);
    }

    const handleUpdate = (e: any) => {
        e.preventDefault();
        dispatch(updateCard(cardText, id));
    }

    const handleDelete = (e: any) => {
        e.preventDefault();
        dispatch(deleteCard(id));
    }

    return (
        <form onSubmit={handleUpdate} className='card'>
            <div onClick={handleDelete} className="card__delete">&times;</div>
            <input type='text' className='card__input' value={cardText} onChange={handlleInputChange}></input>
            <input type='submit' hidden></input>
        </form>
    );
}

export default Card;