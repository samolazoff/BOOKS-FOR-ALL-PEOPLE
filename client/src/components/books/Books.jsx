import React from 'react';

import Book from '../book/Book';

import './books.sass';

const dataBooks = [
    {
        id: '123123123q',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
    },
    {
        id: '123123w234123',
        title: 'Fourth Wing (The Empyrean, 1)',
        author: 'Rebecca Yarros ',
        img: 'https://m.media-amazon.com/images/P/B0BGDM197Q.01._SCLZZZZZZZ_SX500_.jpg',
        discriptionMin: ['fantasy', 'romantic'],
        discriptionMax: "Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy." 
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
    }
];

const Books = () => {
    return (
        <section className='books-box container flx-c'>
            <h2 className="title__block">Books</h2>
            <ul className="books-list flx-r">
                {
                    dataBooks.map(book=><Book dataBook={book}  key={book.id}></Book>)
                }
            </ul>
        </section>
    );
};

export default Books;