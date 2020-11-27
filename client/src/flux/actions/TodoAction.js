import { GET_ITEM, ADD_ITEM, DELETE_ITEM } from "./types"

export const getItems = () => {
    return {
        type: GET_ITEM
    }
}

export const AddItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const DeleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: {
            id
        }
    }
}