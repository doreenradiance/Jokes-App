import { takeLatest, all } from "redux-saga/effects";

/*Types*/
import { JokesTypes } from "./Joke/jokeActions"

/*Sagas*/
import { fetchJokes, fetchCategoryJokes, searchJokes } from "./Joke/jokeSagas"

/*Connecting Types To Sagas*/

export default function* root() {
    yield all([
        takeLatest(JokesTypes.FETCH_JOKES_REQUEST, fetchJokes),
        takeLatest(JokesTypes.FETCH_CATEGORY_JOKES_REQUEST, fetchCategoryJokes),
        takeLatest(JokesTypes.SEARCH_JOKES_REQUEST, searchJokes)
    ]);
}