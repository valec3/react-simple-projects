import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Box,
    List,
    ListItem,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const ExerciseCard = ({ exercise }) => {
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

                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                >
                    Secondary muscles: {exercise.secondaryMuscles.join(', ')}
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="primary"
                    fontWeight={600}
                >
                    Instrucciones:
                </Typography>
                <List
                    sx={{
                        ml: 0,
                        width: '100%',
                    }}
                >
                    {exercise.instructions.map((step, index) => (
                        <ListItem key={index}>
                            <Typography key={index} variant="body2">
                                {index + 1}. {step}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

const ExerciseList = ({ exercises }) => {
    return (
        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
            <div
                style={{
                    display: 'inline-grid',
                    gridTemplateColumns:
                        'repeat(auto-fill, minmax(350px, 1fr))',
                    alignItems: 'center',
                    justifyItems: 'center',
                    width: { xs: '100%', md: '80%' },
                    gap: '40px',
                }}
            >
                {exercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </Box>
    );
};

export default ExerciseList;
