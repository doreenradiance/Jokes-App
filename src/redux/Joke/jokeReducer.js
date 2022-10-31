import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { JokesTypes } from "./jokeActions";

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    fetchingJokes: null,
    fetchingCategory: null,
    fetchingSearch: null,

    jokes: null,
    category: null,
    search: null,

    errorJokes: null,
    errorCategory: null,
    errorSearch: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const fetchJokesRequest = (state) => {
    return { ...state, fetchingJokes: true, jokes: null }
};
export const fetchCategoryJokesRequest = (state) => {
    return { ...state, fetchingCategory: true, }
}
export const searchJokesRequest = (state) => {
    return { ...state, fetchingSearch: true, search: null }
}

// successful api lookup
export const fetchJokesSuccess = (state, action) => {
    const { jokes } = action;
    return { ...state, jokes, fetchingJokes: false, errorJokes: null }
};
export const fetchCategoryJokesSuccess = (state, action) => {
    const { category } = action;
    return { ...state, category, fetchingCategory: false, errorCategory: null }
}
export const searchJokesSuccess = (state, action) => {
    const { search } = action;
    return { ...state, search, fetchingSearch: false, errorSearch: null }
}

// Something went wrong
export const fetchJokesFailure = (state, action) => {
    const { error } = action;
    return { ...state, jokes: false, errorJokes: error }
}
export const fetchCategoryJokesFailure = (state, action) => {
    const { error } = action;
    return { ...state, category: false, errorCategory: error }
}
export const searchJokesFailure = (state, action) => {
    const { error } = action;
    return { ...state, search: false, errorSearch: error }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [JokesTypes.FETCH_JOKES_REQUEST]: fetchJokesRequest,
    [JokesTypes.FETCH_CATEGORY_JOKES_REQUEST]: fetchCategoryJokesRequest,
    [JokesTypes.SEARCH_JOKES_REQUEST]: searchJokesRequest,

    [JokesTypes.FETCH_JOKES_SUCCESS]: fetchJokesSuccess,
    [JokesTypes.FETCH_CATEGORY_JOKES_SUCCESS]: fetchCategoryJokesSuccess,
    [JokesTypes.SEARCH_JOKES_SUCCESS]: searchJokesSuccess,

    [JokesTypes.FETCH_JOKES_FAILURE]: fetchJokesFailure,
    [JokesTypes.FETCH_CATEGORY_JOKES_FAILURE]: fetchCategoryJokesFailure,
    [JokesTypes.SEARCH_JOKES_FAILURE]: searchJokesFailure,
})