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

export const storeData = (data) => ({
    type: "STORE",
    data: data,
});

const initialState = {
    test: 42,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
      case "STORE":
        return {
          characters: action.data
        }
      case "INITIALIZE":
        return true;
      default:
        return state;
    }
}
