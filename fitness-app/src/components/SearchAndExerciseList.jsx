import { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import ExerciseList from './ExerciseList';
import CategoriesExercises from './CategoriesExercises';
const SearchAndExerciseList = () => {
    const [searchedExercises, setSearchedExercises] = useState([]);

    const handleSetSearchedExercises = useCallback((exercises) => {
        setSearchedExercises(exercises);
    }, []);
    console.log('rendering searchedExercises');
    return (
        <div>
            <SearchBar setSearchedExercises={handleSetSearchedExercises} />
            <CategoriesExercises
                setSearchedExercises={handleSetSearchedExercises}
                searchedExercises={searchedExercises}
            />
            <ExerciseList exercises={searchedExercises} />
        </div>
    );
};

export default SearchAndExerciseList;
