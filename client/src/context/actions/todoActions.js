import { GET, ADD, DELETE } from "./types";
import { v4 as uuidv4 } from 'uuid';
import TodoReducer from "../reducers/todoReducer";
import { useReducer } from "react";

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



