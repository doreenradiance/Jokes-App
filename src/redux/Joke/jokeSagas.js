import { call, put } from "redux-saga/effects";
import JokesActions from "./jokeActions";
import * as api from "../../api";

export function* fetchJokes() {
    const res = yield call(api.fetchJokes)

    //success?
    if (res.ok) {
        yield put(JokesActions.fetchJokesSuccess(res.data));
    } else {
        yield put(JokesActions.fetchJokesFailure(res.data))
    }
}

export function* fetchCategoryJokes(action) {
    const { category } = action;
    // make the call to the api
    const res = yield call(api.fetchCategoryJokes, category)

    //success?
    if (res.ok) {
        yield put(JokesActions.fetchCategoryJokesSuccess(res.data));
    } else {
        yield put(JokesActions.fetchCategoryJokesFailure(res.data))
    }
}

export function* searchJokes(action) {
    const { search } = action;
    // make the call to the api
    const res = yield call(api.searchJokes, search)

    //success?
    if (res.ok) {
        yield put(JokesActions.searchJokesSuccess(res.data));
    } else {
        yield put(JokesActions.searchJokesFailure(res.data))
    }
}