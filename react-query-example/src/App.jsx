import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<>HoME</>} />
                    <Route path="/books/create" element={<>Create Book</>} />
                    <Route path="/books/:id" element={<>Book Detail</>} />
                    <Route path="/books/:id/edit" element={<>Edit Book</>} />
                </Routes>
            </BrowserRouter>
            <BooksPage />
        </>
    );
}

export default App;
