import { createStore } from 'redux';

export const fetchCharacters = () =>
    storeData({
      "name": "TestCharacter"
    });

export const initialize = () => ({
    type: "INITIALIZE",
});

export default (initState) =>
    createStore(reducer, initState);

const storeData = (data) => ({
    type: "STORE",
    data: data,
});

const reducer = (state, action) => {
    if (typeof state === "undefined") {
        state = 0;
    }

    switch (action.type) {
      case "STORE":
        return action.data;
      case "INITIALIZE":
        return true;
      default:
        return state;
    }
}
