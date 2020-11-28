import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import Axios from "axios";

export const getItems = () => dispatch => {
    dispatch(SetItemsLoading());
    Axios
        .get("/items")
        .then(res => {
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        })
        .catch(err => {

        })
}

export const AddItem = item => dispatch => {
    Axios
        .post("/items", item)
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch(err => {

        })
}

export const DeleteItem = id => dispatch => {
    Axios
        .delete(`/items/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_ITEM,
                payload: { id }
            })
        })
        .catch(err => {

        })
}


export const SetItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}