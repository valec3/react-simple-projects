import Modal from './Modal';
import ApiService from '../services/index';
import { useState } from 'react';
const ModalNewBook = ({ showModal, handleModal, setBooks }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState({
        name: '',
        cover: '',
        link: '',
    });
    const handleChangeInput = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(book);
        const newBook = await ApiService.createBook(book);
        setIsLoading(false);
        setBooks((prevBooks) => [...prevBooks, newBook[0]]);
        handleModal();
    };
    return (
        <Modal showModal={showModal} handleModal={handleModal}>
            <div className="bg-white">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 mr-36">
                    Nuevo libro
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nombre
                        </label>
                        <input
                            onChange={handleChangeInput}
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        focus:ring focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="cover"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Portada
                        </label>
                        <input
                            onChange={handleChangeInput}
                            type="text"
                            id="cover"
                            name="cover"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        focus:ring focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="link"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Enlace
                        </label>
                        <input
                            onChange={handleChangeInput}
                            type="text"
                            id="link"
                            name="link"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                        focus:ring focus:ring-opacity-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        {isLoading ? 'Guardando...' : 'Guardar'}
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default ModalNewBook;
