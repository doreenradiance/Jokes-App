import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import JokesActions from '../redux/Joke/jokeActions';
import { Button, Input } from 'reactstrap';
import LoadingOverlay from 'react-loading-overlay';
import 'primeicons/primeicons.css';
import '../styles.css'

const Jokes = () => {

    //Redux State from Store
    const jokesData = useSelector((state) => {
        if (state && state.jokes && state.jokes.jokes) {
            return state.jokes.jokes
        } else {
            return []
        }
    })
    const searchData = useSelector((state) => {
        if (state && state.jokes && state.jokes.search && state.jokes.search.result) {
            return state.jokes.search.result
        } else {
            return []
        }
    })

    //Redux Dispatch Actions
    const dispatch = useDispatch();
    const fetchJokes = useCallback(() => { dispatch(JokesActions.fetchJokesRequest()); }, [dispatch]);
    const searchJokes = useCallback((search) => { dispatch(JokesActions.searchJokesRequest(search)); }, [dispatch]);

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchJokes()
    }, []);

    return jokesData.loading ? (
        <h2>Loading</h2>
    ) : jokesData.error ? (
        <h2>{jokesData.error}</h2>
    ) : (
        <div style={{ backgroundColor: " #f24e66" }} className="App p-col-12 p-lg-6 p-xl-3">
            <div className="input-button" style={{
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
                height: "30px", marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem"
            }}>
                <Input style={{ width: "700px", marginRight: "0.5rem", backgroundColor: "beige" }} value={search} type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search jokes...'></Input>
                <Button
                    onClick={() => {
                        searchJokes(search); setPage(2)
                    }}>Search</Button>
            </div>
            <Button style={{ marginTop: "1rem", }} onClick={() => window.location.reload()}>Back</Button>
            <h2 style={{ marginTop: "1rem" }} className='heading' >Jokes List</h2>
            {
                page === 1 ?
                    <div>
                        {
                            jokesData.map((joke, index) => {
                                return <p className='jokeText'
                                    onClick={() => { navigate(`/JokesCategory?category=${joke}`) }}
                                    key={index}>{joke}</p>
                            })
                        }
                    </div>
                    :
                    <div>
                        {
                            searchData.map((joke, index) => {
                                return <p className='jokeText'
                                    key={index}>{joke.value}</p>
                            })
                        }
                    </div>
            }
        </div >
    )
}

export default Jokes;
