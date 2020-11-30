import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import Axios from "axios";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./authAction";

export const getItems = () => (dispatch, getState) => {
    dispatch(SetItemsLoading());
    Axios
        .get("/items", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        })
}

export const AddItem = item => (dispatch, getState) => {

    Axios
        .post("/items", item, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        })
}

export const DeleteItem = id => (dispatch, getState) => {
    Axios
        .delete(`/items/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_ITEM,
                payload: { id }
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        })
}


export const SetItemsLoading = () => dispatch => {
    dispatch({
        type: ITEMS_LOADING
    })
}