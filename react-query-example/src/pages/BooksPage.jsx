import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useModal } from '../hooks/useModal';
import ModalNewBook from '../components/ModalNewBook';
const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await supabase.from('Books').select();
            if (data?.length > 0) setBooks(data);
        };
        fetchBooks();
    }, []);
    console.log(books);
    const { showModal, handleModal } = useModal();
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Books Collection
            </h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleModal}
            >
                Nuevo libro
            </button>

            {books.length === 0 ? (
                <p className="text-center text-gray-500">
                    No books available at the moment.
                </p>
            ) : (
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {books.map((book) => (
                        <li
                            key={book.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl group cursor-pointer"
                        >
                            <img
                                src={book.cover}
                                alt={book.name}
                                className="h-72 w-full object-contain bg-slate-200 rounded-md mb-4"
                            />
                            <a
                                href={book.link}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-lg font-semibold text-gray-800 group-hover:text-blue-600"
                            >
                                {book.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
            <ModalNewBook
                showModal={showModal}
                handleModal={handleModal}
                setBooks={setBooks}
            />
        </div>
    );
};

export default BooksPage;
