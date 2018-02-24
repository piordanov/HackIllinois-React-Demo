import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './components/HomePage';
import PostPage from './components/PostPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Link to="/" className="mainTitle">
                     <div>Hacker News</div>
                    </Link>
            
                    <hr/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/post/:id" component={PostPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
