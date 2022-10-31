import { createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    fetchJokesRequest: ["jokes"],
    fetchCategoryJokesRequest: ["category"],
    searchJokesRequest: ["search"],

    fetchJokesSuccess: ["jokes"],
    fetchCategoryJokesSuccess: ["category"],
    searchJokesSuccess: ["search"],

    fetchJokesFailure: ["error"],
    fetchCategoryJokesFailure: ["error"],
    searchJokesFailure: ["error"]

});

export const JokesTypes = Types;
export default Creators;