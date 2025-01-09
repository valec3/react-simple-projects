import { Stack, Typography } from '@mui/material';
import IconExercise from '../assets/icons/gym.png';
import PropTypes from 'prop-types';
const BodyPart = ({ element, elementSelected, setElementSelected }) => {
    return (
        <Stack
            type="button"
            alignItems={'center'}
            justifyContent={'center'}
            gap={2}
            className="bodyPart-card"
            onClick={() => setElementSelected(element)}
            sx={{
                border:
                    elementSelected === element
                        ? '2px solid #FF2625'
                        : '2px solid transparent',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                width: '220px',
                height: '220px',
                cursor: 'pointer',
            }}
        >
            <img
                src={IconExercise}
                alt="exercise"
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '5%',
                }}
            />
            <Typography
                variant={'h6'}
                sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                }}
            >
                {element}
            </Typography>
        </Stack>
    );
};

BodyPart.propTypes = {
    element: PropTypes.string,
    setElementSelected: PropTypes.func,
    elementSelected: PropTypes.string,
};

export default BodyPart;
