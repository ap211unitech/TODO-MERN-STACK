import { GET_ITEM, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
    items: [
        { id: 1, title: "Item 1", content: "Item 1 content" }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state
            }
        case ADD_ITEM:
            const note = {
                id: state.items.length + 1,
                title: action.payload.title,
                content: action.payload.content
            }
            return {
                ...state,
                items: [...state.items, note]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(note => note.id !== action.payload.id)
            }
        default:
            return state
    }
}