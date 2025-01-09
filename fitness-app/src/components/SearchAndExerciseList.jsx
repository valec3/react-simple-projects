import { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import ExerciseList from './ExerciseList';
import CategoriesExercises from './CategoriesExercises';
const SearchAndExerciseList = () => {
    const [searchedExercises, setSearchedExercises] = useState([]);
    const [searchedExercisesFiltered, setSetsearchedExercisesFiltered] =
        useState([]);
    const handleSetSearchedExercises = useCallback((exercises) => {
        setSearchedExercises(exercises);
        setSetsearchedExercisesFiltered(exercises);
    }, []);
    console.log('rendering searchedExercises');
    return (
        <>
            <SearchBar setSearchedExercises={handleSetSearchedExercises} />
            <CategoriesExercises
                setSearchedExercises={handleSetSearchedExercises}
                searchedExercises={searchedExercises}
                searchedExercisesFiltered={searchedExercisesFiltered}
            />
            <ExerciseList exercises={searchedExercisesFiltered} />
        </>
    );
};

export default SearchAndExerciseList;
