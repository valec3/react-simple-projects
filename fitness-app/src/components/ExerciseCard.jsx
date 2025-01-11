import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import PropTypes from 'prop-types';
const ExerciseCard = ({ exercise, element }) => {
    const navigate = useNavigate();
    if (element) {
        exercise = element;
    }
    return (
        <Card
            sx={{
                width: '100%',
                border: '1px solid #e0e0e0',
                ':hover': { boxShadow: '0 0 3px 0 #FF2625' },
                cursor: 'pointer',
                transition: 'box-shadow 0.2s linear',
                height: '100%',
            }}
            onClick={() => navigate(`/ejercicio/${exercise.id}`)}
        >
            <CardMedia
                component="img"
                height="220"
                image={exercise.gifUrl}
                alt={exercise.name}
                sx={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    backgroundColor: '#f5f5f5',
                }}
            />

            <CardContent
                style={{
                    paddingBlock: '10px',
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    fontWeight={600}
                    noWrap
                >
                    {exercise.name.charAt(0).toUpperCase() +
                        exercise.name.slice(1)}
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    marginBottom={1}
                >
                    <Chip
                        icon={<FitnessCenterIcon />}
                        label={exercise.equipment}
                        color="primary"
                        size="small"
                    />
                    <Chip
                        label={exercise.bodyPart}
                        color="secondary"
                        size="small"
                    />
                    <Chip
                        label={exercise.target}
                        color="success"
                        size="small"
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

ExerciseCard.propTypes = {
    exercise: PropTypes.object.isRequired,
};

export default ExerciseCard;
