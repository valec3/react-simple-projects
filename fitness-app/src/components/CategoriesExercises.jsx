import { Box } from '@mui/material';
import { getCategories } from '../services/api';
import { memo, useEffect, useState } from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';
import PropTypes from 'prop-types';
import BodyPart from './BodyPart';
const CategoriesExercises = memo(function CategoriesExercises({
    setSearchedExercises = () => {},
    setSearchedExercisesFiltered = () => {},
    searchedExercises = [],
}) {
    const [categorieSelected, setCategorieSelected] = useState('');
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

    useEffect(() => {
        const filterExercises = async () => {
            const filteredExercises = searchedExercises.filter((exercise) => {
                return exercise.bodyPart === categorieSelected;
            });
            setSearchedExercisesFiltered(filteredExercises);
        };
        if (categorieSelected) {
            filterExercises();
        }
    }, [
        categorieSelected,
        setSearchedExercises,
        searchedExercises,
        setSearchedExercisesFiltered,
    ]);

    console.log('rendering categories', categories);
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                padding: '25px',
                marginInline: 'auto',
                overflowX: 'auto',
            }}
        >
            <HorizontalScrollBar
                data={categories}
                setElementSelected={setCategorieSelected}
                elementSelected={categorieSelected}
                Component={BodyPart}
            />
        </Box>
    );
});

CategoriesExercises.propTypes = {
    setSearchedExercises: PropTypes.func,
    searchedExercises: PropTypes.array,
    setSearchedExercisesFiltered: PropTypes.array,
};

export default CategoriesExercises;
