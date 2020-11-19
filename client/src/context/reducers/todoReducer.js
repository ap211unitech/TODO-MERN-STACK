import { GET, ADD, DELETE } from "../actions/types";
import { v4 as uuidv4 } from 'uuid';

export default (state, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state
            }
        case ADD:
            return {
                ...state,
                notes: [...state.notes, { id: uuidv4(), title: action.payload.title, content: action.payload.content }]
            }
        case DELETE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }
        default:
            return state;
    }
}