import apisauce from "apisauce";

// // STEP 1
const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: " https://api.chucknorris.io/jokes/categories",

    // here are some default headers
    headers: {
        'Cache-Control': 'no-cache',
        "content-type": "application/json;charset=UTF-8",
    },
    // 10 second timeout...
    timeout: 10000
})

// STEP 2
// Define some functions that call the api.  The goal is to provide
// a thin wrapper of the api layer providing nicer feeling functions
// rather than "get", "post" and friends.
//
// I generally don't like wrapping the output at this level because
// sometimes specific actions need to be take on `403` or `401`, etc.
//
// Since we can't hide from that, we embrace it by getting out of the
// way at this level.
//
// Be sure that methods are correct

const fetchJokes = () => api.get('https://api.chucknorris.io/jokes/categories');
const fetchCategoryJokes = (category) => api.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
const searchJokes = (search) => api.get(`https://api.chucknorris.io/jokes/search?query=${search}`)

// STEP 3
// a list of the API functions from step 2 being exported
export {
    fetchJokes,
    fetchCategoryJokes,
    searchJokes
}