import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } , [])
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Books</h3>
            <p className="text-3xl font-bold text-center">{books.length}</p>
        </div>
    );
};

export default Books;