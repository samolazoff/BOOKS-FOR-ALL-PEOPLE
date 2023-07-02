import React from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from '../app-header/AppHeader';
import AppFooter from '../app-footer/AppFooter';

const Layout = () => {
    return (
        <div className="app flx-c">
            <AppHeader></AppHeader>
            <main className='app-main'>
                <Outlet></Outlet>
            </main>
            <AppFooter></AppFooter>
        </div>
    );
};
export default Layout;