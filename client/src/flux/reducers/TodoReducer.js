import { GET_ITEM, ADD_ITEM, DELETE_ITEM } from "../actions/types"

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

        default:
            return state
    }
}