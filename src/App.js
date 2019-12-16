import React from 'react';
import Home from './navigation/home';
import About from './navigation/about';
import Contact from './navigation/contact';
import Nav from './nav';
import Tips from './navigation/tips';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/tips" component={Tips} />
                </Switch>

            </div>
        </BrowserRouter>
    );
};

export default App;
