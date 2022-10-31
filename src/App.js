import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/Joke/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jokes from './components/Jokes';
import JokesCategory from './components/JokesCategory';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path='/' element={<Jokes />} />
              <Route path='/JokesCategory' element={<JokesCategory />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
