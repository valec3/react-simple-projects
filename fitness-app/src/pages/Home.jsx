import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchBar from '../components/SearchBar';
import ExerciseList from '../components/ExerciseList';
const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchBar />
            <ExerciseList />
        </Box>
    );
};

export default Home;
