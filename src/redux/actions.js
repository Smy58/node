import { ADDCARD, UPDATECARD, DELETECARD } from "./types";

export function addCard(text, id){
    return {
        type: ADDCARD,
        data: { text, id }
    }
}

export function updateCard(text, id){
    return {
        type: UPDATECARD,
        data: { text, id }
    }
}

export function deleteCard(id){
    return {
        type: DELETECARD,
        id
    }
}