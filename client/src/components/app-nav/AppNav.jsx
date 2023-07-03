import React from 'react';
import { NavLink } from 'react-router-dom';

import './appNav.sass';

const AppNav = () => {
    return (
        <nav className='app-nav'>
            <ul className='nav-list flx-r'>
                <li className='nav__item'><NavLink to="/">HOME</NavLink></li>
                <li className='nav__item'><NavLink to="/books">Books</NavLink></li>
                <li className='nav__item'><NavLink to="/forum">FORUM</NavLink></li>
                <li className='nav__item'><NavLink to="/login">SIgn In</NavLink></li>
                <li className='nav__item'><NavLink to="/registration">sign up</NavLink></li>
                <li className='nav__item'><NavLink to="/card">book exchange</NavLink></li>
                <li className='nav__item'><NavLink to="/profile">Profile</NavLink></li>
                <li className='nav__item'><button className='btn btn__exit'>Exit</button></li>
            </ul> 
        </nav>
    );
};

export default AppNav;