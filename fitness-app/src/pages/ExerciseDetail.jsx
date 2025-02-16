import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { getDetailExercise } from '../services/api';
import ExerciseDetails from '../components/ExerciseDetails';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Loader from '../components/Loader';
const ExerciseDetail = () => {
    const { id } = useParams();
    const [exercise, setExercise] = useState({
        bodyPart: 'waist',
        equipment: 'body weight',
        gifUrl: 'https://v2.exercisedb.io/image/aPgRy7VouW11kN',
        id: '0002',
        name: '45° side bend',
        target: 'abs',
        secondaryMuscles: ['obliques'],
        instructions: [
            'Stand with your feet shoulder-width apart and your arms extended straight down by your sides.',
            'Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.',
            'Pause for a moment at the bottom, then slowly return to the starting position.',
            'Repeat on the other side.',
            'Continue alternating sides for the desired number of repetitions.',
        ],
    });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchDetailExercise = async () => {
            try {
                setIsLoading(true);
                const fetchedData = await getDetailExercise(id);
                setIsLoading(false);
                setExercise(fetchedData);
            } catch (error) {
                console.error('Error fetching detail exercise:', error);
            }
        };
        fetchDetailExercise();
    }, [id]);

    if (isLoading) {
        return (
            <Box
                display={'flex'}
                justifyContent={'center'}
                mt={'8rem'}
                height={'700px'}
            >
                <Loader />
            </Box>
        );
    }

    return (
        <Box mt="8rem">
            <ExerciseDetails exercise={exercise} />
            <ExerciseVideos query={exercise.name} />
            <SimilarExercises keyword={exercise.bodyPart} />
        </Box>
    );
};

export default ExerciseDetail;
