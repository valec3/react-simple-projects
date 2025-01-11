import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Box, Button, List, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
const ExerciseDetails = ({ exercise }) => {
    const { bodyPart, equipment, target, instructions, name, gifUrl } =
        exercise;
    const bodyPartData = [
        {
            icon: BodyPartImage,
            label: 'Parte del cuerpo',
            value: bodyPart,
        },
        {
            icon: TargetImage,
            label: 'Objetivo',
            value: target,
        },
        {
            icon: EquipmentImage,
            label: 'Equipmento',
            value: equipment,
        },
    ];
    return (
        <Stack
            gap="60px"
            direction={{ xs: 'column', md: 'row' }}
            alignItems={'center'}
            justifyContent={'space-around'}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="detail-image"
            />
            <Stack
                sx={{
                    gap: {
                        xs: ' 20px',
                        lg: '40px',
                    },
                    padding: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={'bold'}
                    textAlign={{ xs: 'center', md: 'left' }}
                    fontSize={{ xs: '24px', md: '42px' }}
                >
                    {name}
                </Typography>

                <List>
                    <Typography
                        variant="h6"
                        fontWeight={'bold'}
                        color="#FF2625"
                    >
                        Instrucciones
                    </Typography>
                    {instructions?.map((instruction, index) => (
                        <Typography key={index} variant="body1">
                            {instruction}
                        </Typography>
                    ))}
                </List>
                <Stack spacing={2}>
                    {bodyPartData.map((item) => (
                        <Box
                            key={item.label}
                            display="flex"
                            alignItems="center"
                            gap={3}
                        >
                            <Button
                                sx={{
                                    backgroundColor: '#FFF2DB',
                                    borderRadius: '50%',
                                    width: '70px',
                                    aspectRatio: '1',
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        aspectRatio: '1',
                                    }}
                                />
                            </Button>
                            <Typography fontWeight={'bold'}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

ExerciseDetails.propTypes = {
    exercise: PropTypes.object.isRequired,
};

export default ExerciseDetails;
