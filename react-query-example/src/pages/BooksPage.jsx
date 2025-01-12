import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await supabase.from('Books').select();
            if (data?.length > 0) setBooks(data);
        };
        fetchBooks();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Books Collection
            </h1>
            {books.length === 0 ? (
                <p className="text-center text-gray-500">
                    No books available at the moment.
                </p>
            ) : (
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {books.map((book) => (
                        <li
                            key={book.id}
                            className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <img
                                src={book.cover}
                                alt={book.name}
                                className="h-96 w-full object-contain rounded-md mb-4"
                            />
                            <a
                                href={book.link}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-lg font-semibold text-gray-800 hover:text-blue-500"
                            >
                                {book.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BooksPage;
