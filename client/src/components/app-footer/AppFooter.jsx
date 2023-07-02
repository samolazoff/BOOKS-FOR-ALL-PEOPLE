import React from 'react';

import './appFooter.sass';

const AppFooter = () => {
    return (
        <footer className='app-footer flx-c'>
            <div className="container">
                <span className="footer-txt">2023 by
                    <a href="https://github.com/samolazoff" className="footer-link"> @Samolazoff</a>
                </span>
            </div>
        </footer>
    );
};

export default AppFooter;