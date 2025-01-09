import { Box, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ exercises }) => {
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
