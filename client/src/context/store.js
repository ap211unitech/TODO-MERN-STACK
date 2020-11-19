import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoReducer from "./reducers/todoReducer";
import { GET, DELETE, ADD } from "./actions/types";
import Axios from "axios";

let initialState = {
    notes: [
        { id: uuidv4(), title: "First Note", content: "First Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Second Note", content: "Second Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Third Note", content: "First Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Fourth Note", content: "Second Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Fifth Note", content: "First Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Sixth Note", content: "Second Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
    ]
}


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    Axios.get("/api/items")
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    function AddItem(title, content) {
        dispatch({
            type: ADD,
            payload: {
                title, content
            }
        })
    }

    function DeleteATodoItem(id) {
        dispatch({
            type: DELETE,
            payload: { id }
        })
    }

    return (
        <GlobalContext.Provider value={{
            allNotes: state.notes,
            deleteItem: DeleteATodoItem,
            addItem: AddItem
        }}>
            {children}
        </GlobalContext.Provider>
    )
}