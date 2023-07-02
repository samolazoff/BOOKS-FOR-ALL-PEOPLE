import {Routes, Route} from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../home/Home';
import Books from '../books/Books';

import './app.sass';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='books' element={<Books></Books>}></Route>
            </Route>
        </Routes>
    );
}

export default App;