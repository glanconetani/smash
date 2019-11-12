import { createStore, applyMiddleware } from 'redux';

const test = {
   test: 42
}

export const fetchCharacters = () => storeData(test);

export const initialize = () => ({
    type: "INITIALIZE",
});

export default (initState) =>
    createStore(reducer, initState);

const storeData = (data) => ({
    type: "STORE",
    data: data,
});

const initialState = {
    test: 42,
    characters: []
}

const reducer = (state = initialState, action) => {

    console.log(action.data);
    return state;

    switch (action.type) {
      case "STORE":
        return action.data;
      case "INITIALIZE":
        return true;
      default:
        return state;
    }
}
