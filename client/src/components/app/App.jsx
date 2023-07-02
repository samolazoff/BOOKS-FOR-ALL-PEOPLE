import AppHeader from '../app-header/AppHeader';
import AppFooter from '../app-footer/AppFooter';
import Home from '../home/Home';

import './app.sass';

function App() {
    return (
        <div className="app flx-c">
            <AppHeader></AppHeader>
            <main className='app-main'>
                <Home></Home>
            </main>
            <AppFooter></AppFooter>
        </div>
    );
}

export default App;