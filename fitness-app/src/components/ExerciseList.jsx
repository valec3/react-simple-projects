import { Box, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
const ExerciseList = ({ exercises, isLoading }) => {
    if (isLoading) {
        return <Loader />;
    }
    if (exercises.length === 0) {
        return (
            <Box
                display={'flex'}
                justifyContent={'center'}
                width={'100%'}
                paddingBlock={'20px'}
            >
                <h1>
                    No se encontraron ejercicios. Intenta con otro término de
                    búsqueda.
                </h1>
            </Box>
        );
    }
    return (
        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
            <Stack
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 350px)',
                        lg: 'repeat(3, 350px)',
                    },
                    alignItems: 'center',
                    justifyItems: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '80%' },
                    gap: '40px',
                    padding: '0px 20px',
                }}
            >
                {exercises?.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseList;
