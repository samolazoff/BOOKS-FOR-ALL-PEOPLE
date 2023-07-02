import React from 'react';

import AppLogo from '../logo/AppLogo';
import AppNav from '../app-nav/AppNav';

import './appHeader.sass';

const AppHeader = () => {
    return (
        <header className='app-header'>
            <div className="container flx-r">
                <AppLogo></AppLogo>
                <AppNav></AppNav>
            </div>
        </header>
    );
};

export default AppHeader;