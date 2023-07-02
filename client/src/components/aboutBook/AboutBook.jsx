import React from 'react';
import {Link, useParams } from 'react-router-dom';

import './aboutBook.sass';

const AboutBook = (dataBooks) => {
    const {id} = useParams();
    const {img, title, author,discriptionMax, discriptionMin} = dataBooks.dataBooks.filter(book=>id===book.id)[0];

    return (
        <section className='block-book container flx-c'>
            <h2 className="title__block">About Book</h2>
            <div className="box-book flx-r">
                <img src={img} alt="book img" className="box-book__img" />
                <div className="box-book-content flx-c">
                    <span className="box-book__txt">
                        <span className="txt_bold">Title: </span>
                        {title}
                    </span>
                    <span className="box-book__txt">
                        <span className="txt_bold">Author: </span>
                        {author}
                    </span>
                    <span className="box-book__txt">
                        <span className="txt_bold">Tegs: </span>
                        {
                            discriptionMin.map(disc=>{
                                return `#${disc} `
                            })
                        }
                    </span>
                    <span className="box-book__txt">
                        <span className="txt_bold">Discription: </span>
                        {discriptionMax}
                    </span>
                    <div className="books-list-item__box-link flx-r">
                        <Link to={`/forum/${id}`} className="btn books-list-item__btn">Forum</Link>
                        <button className="books-list-item__btn">Favorite</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBook;