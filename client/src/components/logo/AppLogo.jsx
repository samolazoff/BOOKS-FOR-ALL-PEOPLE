import './appLogo.sass';

import React from 'react';

const AppLogo = () => {
    return (
        <a href="/">
            <h1 className="logo flx-c">
                <span className='logo__big-txt'>Books</span>
                <span>for the</span>
                <span className='logo__big-txt'>People</span>
            </h1>
        </a>
    );
};

export default AppLogo;