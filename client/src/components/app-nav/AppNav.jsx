import React from 'react';

import './appNav.sass';

const AppNav = () => {
    return (
        <nav className='app-nav'>
            <ul className='nav-list flx-r'>
                <li className='nav__item'><a href="/">HOME</a></li>
                <li className='nav__item'><a href="/books">Books</a></li>
                <li className='nav__item'><a href="/forum">FORUM</a></li>
                <li className='nav__item'><a href="/loggin">Login In</a></li>
                <li className='nav__item'><a href="/registration">Login up</a></li>
                <li className='nav__item'><a href="/card">book exchange</a></li>
                <li className='nav__item'><a href="/profile">Profile</a></li>
                <li className='nav__item'><button className='btn btn__exit'>Exit</button></li>
            </ul> 
        </nav>
    );
};

export default AppNav;