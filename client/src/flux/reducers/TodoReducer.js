import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "../actions/types";

const initialState = {
    items: [],
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(note => note._id !== action.payload.id)
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}