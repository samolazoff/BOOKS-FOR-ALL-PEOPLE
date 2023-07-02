import React from 'react';
import {Link} from 'react-router-dom';
import './book.sass';

const Book = (dataBook) => {
    const {id, title, author, img, discriptionMin} =dataBook.dataBook;
    return (
        <li className="books-list-item flx-c" id={id}>
            <img src={img} alt="img-book" className="books-list-item__img" />
            <span className='books-list-item__title'>{title}</span>
            <span className='books-list-item__author'>{author}</span>
            <span className='books-list-item__discription'>
                {
                    discriptionMin.map(disc=>{
                        return `#${disc} `
                    })
                }
            </span>
            <div className="books-list-item__box-link flx-r">
                <Link to={`/books/${id}`} className="btn books-list-item__btn">About</Link>
                <Link to={`/forum/${id}`} className="btn books-list-item__btn">Forum</Link>
                <button className="books-list-item__btn">Favorite</button>
            </div>
        </li>
    );
};

export default Book;