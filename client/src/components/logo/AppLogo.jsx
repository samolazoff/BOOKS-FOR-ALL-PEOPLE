import './appLogo.sass';
import { Link } from 'react-router-dom';

import React from 'react';

const AppLogo = () => {
    return (
        <Link to="/">
            <h1 className="logo flx-c">
                <span className='logo__big-txt'>Books</span>
                <span>for the</span>
                <span className='logo__big-txt'>People</span>
            </h1>
        </Link>
    );
};

export default AppLogo;