import { ADDCARD, DELETECARD, UPDATECARD } from "./types";

const initialState = {
    cards: []
}

export const cardsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADDCARD:
            return {
                ...state,
                cards: [...state.cards, action.data]
            }
        case UPDATECARD:
            const { data } = action;
            const { cards } = state;
            const itemIndex = cards.findIndex(res => res.id === data.id);

            const nextCards = [...cards.slice(0, itemIndex), data, ...cards.slice(itemIndex+ 1)];
            return {
                ...state,
                cards: nextCards
            }
        case DELETECARD:
            return(() => {
                const { id } = action;
                const { cards } = state;
                const itemIndex = cards.findIndex(res => res.id === id);

                const nextCards = [...cards.slice(0, itemIndex), ...cards.slice(itemIndex+ 1)];
                return {
                    ...state,
                    cards: nextCards
                }
            })();
        default:
            return state;
    }
}