import { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import ExerciseList from './ExerciseList';
import CategoriesExercises from './CategoriesExercises';
const SearchAndExerciseList = () => {
    const [searchedExercises, setSearchedExercises] = useState([]);
    const [searchedExercisesFiltered, setSearchedExercisesFiltered] =
        useState(searchedExercises);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const handleSetSearchedExercises = useCallback((exercises) => {
        setSearchedExercises(exercises);
        setSearchedExercisesFiltered(exercises);
    }, []);
    console.log('rendering searchedExercises');
    return (
        <>
            <SearchBar
                setSearchedExercises={handleSetSearchedExercises}
                setIsLoading={setIsLoading}
            />
            <CategoriesExercises
                setSearchedExercises={handleSetSearchedExercises}
                searchedExercises={searchedExercises}
                setSearchedExercisesFiltered={setSearchedExercisesFiltered}
            />
            <ExerciseList
                exercises={searchedExercisesFiltered}
                isLoading={isLoading}
            />
            {/* <InfinitScroll/> */}
        </>
    );
};

export default SearchAndExerciseList;
