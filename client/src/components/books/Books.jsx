import React from 'react';

import Book from '../book/Book';

import './books.sass';


const Books = (dataBooks) => {
    return (
        <section className='books-box container flx-c'>
            <h2 className="title__block">Books</h2>
            <ul className="books-list flx-r">
                {
                   dataBooks.dataBooks.map(book=><Book dataBook={book}  key={book.id}></Book>)
                }
            </ul>
        </section>
    );
};

export default Books;