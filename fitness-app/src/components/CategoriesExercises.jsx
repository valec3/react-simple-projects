import { Box } from '@mui/material';
import { getCategories } from '../services/api';
import { memo, useEffect, useState } from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';
import PropTypes from 'prop-types';
const CategoriesExercises = memo(function CategoriesExercises({
    setSearchedExercises = () => {},
}) {
    const [categories, setCategories] = useState([
        'back',
        'cardio',
        'chest',
        'lower arms',
        'lower legs',
        'neck',
        'shoulders',
        'upper arms',
        'upper legs',
        'waist',
    ]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedData = await getCategories();
                setCategories(fetchedData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        // fetchCategories();
    }, []);
    console.log('rendering categories', categories);
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                padding: '25px',
            }}
        >
            <HorizontalScrollBar data={categories} />
        </Box>
    );
});

CategoriesExercises.propTypes = {
    setSearchedExercises: PropTypes.func,
};

export default CategoriesExercises;
