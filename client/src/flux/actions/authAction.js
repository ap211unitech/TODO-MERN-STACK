import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';
import Axios from "axios";
import { returnErrors } from "./errorAction";

//Check Token and Load User
export const LoadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING });

    Axios
        .get("/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}


export const register = ({ name, email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body = { name, email, password };


    Axios
        .post('/users/signup', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, REGISTER_FAIL));
            dispatch({
                type: REGISTER_FAIL,
            });
        })
}


export const login = ({ email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body = { email, password };
    Axios
        .post('/auth/signin', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, LOGIN_FAIL))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
    dispatch({
        type: "DEFAULT"
    })
}



export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};