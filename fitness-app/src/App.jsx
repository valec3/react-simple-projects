import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
function App() {
    return (
        <BrowserRouter>
            <Box width="400px" sx={{ width: { xl: '1440px' } }} m="auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ejercicio:id" element={<ExerciseDetail />} />
                    {/* <Route path="/rutina:id" element={<Routine />} /> */}
                </Routes>
                <Footer />
            </Box>
        </BrowserRouter>
    );
}

export default App;
