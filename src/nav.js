import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
    return (
        <div className="App">
            <nav>

                <ul className="links">
                    <Link to='/home' className="title">
                        <h1>Hiking Guides</h1>
                    </Link>

                    <Link to='/home' className="nav-link">
                        <li><a>Home</a></li>
                    </Link>
                    |
                    <Link to='/about' className="nav-link">
                        <li><a>About</a></li>
                    </Link>
                    |
                    <Link to='/contact' className="nav-link">
                        <li><a>Contact</a></li>
                    </Link>
                    |
                    <Link to='/tips' className="nav-link">
                        <li>Tips</li>
                    </Link>
                </ul>
            </nav>
        </div>

    );
};

export default Nav;