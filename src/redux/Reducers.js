import { combineReducers } from "redux";

const Reducers = combineReducers({
    jokes: require('./Joke/jokeReducer').reducer
})

export default Reducers;