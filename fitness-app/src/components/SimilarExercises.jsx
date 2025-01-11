import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import { useEffect, useState } from 'react';
import { getExercises } from '../services/api';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const SimilarExercises = ({ keyword }) => {
    const [similarExercises, setSimilarExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchSimilarExercises = async () => {
            try {
                setIsLoading(true);
                const data = await getExercises(keyword);
                setIsLoading(false);
                setSimilarExercises(data);
            } catch (error) {
                console.error('Error fetching similar exercises:', error);
            }
        };

        fetchSimilarExercises();
    }, [keyword]);
    console.log('rendering SimilarExercises', similarExercises);
    return (
        <Box>
            <Typography
                sx={{ fontSize: { lg: '40px', xs: '20px' } }}
                fontWeight={700}
                mb="33px"
            >
                Ejercicios similares a{' '}
                <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
                    {keyword}
                </span>{' '}
            </Typography>
            <Stack
                direction={{
                    xs: 'column',
                    md: 'row',
                }}
                sx={{ padding: '2px', position: 'relative' }}
            >
                {isLoading && <Loader />}
                {similarExercises.length !== 0 && (
                    <HorizontalScrollBar
                        isLoading={isLoading}
                        data={similarExercises ?? []}
                        Component={ExerciseCard}
                        setElementSelected={() => {}}
                    />
                )}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
