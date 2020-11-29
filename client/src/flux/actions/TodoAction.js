import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import Axios from "axios";
import { returnErrors } from "./errorAction";

export const getItems = () => dispatch => {
    const config = {
        headers: {
            'Content-type': 'applicatioon/json',
            'x-auth-token': localStorage.getItem("token")
        }
    }
    dispatch(SetItemsLoading());
    Axios
        .get("/items", config)
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

export const AddItem = item => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            'x-auth-token': localStorage.getItem("token")
        }
    }
    Axios
        .post("/items", item, config)
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

export const DeleteItem = id => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            'x-auth-token': localStorage.getItem("token")
        }
    }
    Axios
        .delete(`/items/${id}`)
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


export const SetItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}