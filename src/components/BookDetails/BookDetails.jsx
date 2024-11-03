import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    
    const book = data.find( book => book.bookId === id);
    const {bookId: currentBook, image} = book

    return (
        <div className='my-12'>
            <h2>Book Details:{bookId}</h2>
            <img src={image} className='w-40' alt="" />
            <br />
            <button className='btn btn-accent mr-4 btn-outline'>Read</button>
            <button className='btn btn-accent'>Wishlist</button>
        </div>
    );
};

export default BookDetails;