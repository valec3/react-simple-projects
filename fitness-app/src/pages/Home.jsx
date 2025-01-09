import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import CategoriesExercises from '../components/CategoriesExercises';
import SearchAndExerciseList from '../components/SearchAndExerciseList';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchAndExerciseList>
                <CategoriesExercises />
            </SearchAndExerciseList>
        </Box>
    );
};

export default Home;
