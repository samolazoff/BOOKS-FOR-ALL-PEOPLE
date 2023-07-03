import {Routes, Route} from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../home/Home';
import Books from '../books/Books';
import AboutBook from '../aboutBook/AboutBook';
import Login from '../login/Login';
import Registration from '../registration/Registration';

import './app.sass';
const dataBooks = [
    {
        id: '123123123q112',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '123123w234123',
        title: 'The 48 Laws of Power',
        author: ' Robert Greene ',
        img: 'https://m.media-amazon.com/images/P/0140280197.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['history'],
        discriptionMax: "In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”), and many recommend absolute self-preservation (“Law 15: Crush Your Enemy Totally”). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game." 
    },
    {
        id: '1231dfg23ee123',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '12312dfg3r123',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '12312312rvb2t3',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '12312jffn3y123',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '123123123qasdasd',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '123123123q213',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '123123123q234sfdfs',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '123123123qnhgrdf',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
];

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='books' element={<Books dataBooks={dataBooks}></Books>}></Route>
                <Route path='books/:id' element={<AboutBook dataBooks={dataBooks}></AboutBook>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='regist' element={<Registration></Registration>}></Route>
            </Route>
        </Routes>
    );
}

export default App;