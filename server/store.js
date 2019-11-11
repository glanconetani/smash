import { createStore, applyMiddleware } from 'redux';
import fetch from "isomorphic-fetch";
import thunkMiddleware from "redux-thunk";

const test = {
   test: 42
}

export const fetchCharacters = () => storeData(test);

const fetchData = () => {
    return fetch("http://localhost:4001/Bayonetta.JSON")
    .then(res => res.json())
}

export const initialize = () => ({
    type: "INITIALIZE",
});

export default (initState) =>
    createStore(reducer, initState, applyMiddleware(thunkMiddleware));

const storeData = (data) => ({
    type: "STORE",
    data: data,
});

const initialState = {
    test: 42,
    characters: []
}

const reducer = (state = initialState, action) => {

    return state;
}
