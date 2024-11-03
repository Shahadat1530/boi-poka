import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } , [])
    return (
        <div className='my-10 space-y-5'>
            <h3 className="text-3xl font-bold text-center">Books</h3>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map( book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;