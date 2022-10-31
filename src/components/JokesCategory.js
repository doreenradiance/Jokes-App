import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import JokesActions from '../redux/Joke/jokeActions';
import { Button } from 'reactstrap';
import '../styles.css'

const JokesCategory = () => {
    const initialState = {
        category: [],
        categoryJokesData: null
    }
    const [state, setState] = useState(initialState);

    const location = useLocation()
    const navigate = useNavigate();

    const parsed = queryString.parse(location.search);

    const categoryJokesData = useSelector((state) => {
        if (state && state.jokes && state.jokes.category && state.jokes.category.value) {
            return state.jokes.category.value
        } else {
            return ""
        }
    })

    //Redux Dispatch Actions
    const dispatch = useDispatch();
    const fetchCategoryJokes = useCallback((cat) => {
        dispatch(JokesActions.fetchCategoryJokesRequest(cat));
    }, [dispatch]);

    useEffect(() => {
        fetchCategoryJokes(parsed.category)
    }, [])

    return (
        <div className='card' >
            <div className='container'>
                <p>
                    {categoryJokesData}
                </p>
                <Button onClick={() => { navigate('/') }}>Go back</Button >
            </div>
        </div>
    )
}

export default JokesCategory;
