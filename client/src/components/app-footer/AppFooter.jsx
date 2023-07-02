import React from 'react';
import { Link } from 'react-router-dom';

import './appFooter.sass';

const AppFooter = () => {
    return (
        <footer className='app-footer flx-c'>
            <div className="container">
                <span className="footer-txt">2023 by
                    <Link to="https://github.com/samolazoff" className="footer-link"> @Samolazoff</Link>
                </span>
            </div>
        </footer>
    );
};

export default AppFooter;