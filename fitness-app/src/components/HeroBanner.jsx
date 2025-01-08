import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
    return (
        <Stack
            sx={{
                gap: '50px',
                width: '100%',
                height: '100%',
            }}
            direction="row"
            justifyContent={{ xs: 'center', lg: 'space-between' }}
        >
            <Box
                sx={{
                    mt: { xs: '30px', md: '70px', lg: '200px' },
                    width: '600px',
                    display: { xs: 'flex', lg: 'block' },
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{ mt: 4, mb: 2 }}
                    color="#FF2625"
                    fontSize={{ xs: '1.5rem', sm: '3rem' }}
                    fontWeight="bold"
                    fontFamily="Josefin Sans"
                >
                    Club Fitness
                </Typography>
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: '36px', lg: '40px' },
                        lineHeight: '50px',
                        textAlign: { xs: 'center', lg: 'left' },
                    }}
                    fontFamily="Josefin Sans"
                >
                    Descubre los mejores ejercicios para tu rutina de
                    entrenamiento
                </Typography>
                <Typography
                    fontSize="23px"
                    lineHeight="35px"
                    fontFamily="Josefin Sans"
                >
                    ¡Comienza hoy mismo!
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: '#FF2625',
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}
                    href="#exercises"
                    style={{ fontFamily: 'Josefin Sans' }}
                >
                    Explorar ejercicios
                </Button>
                <Typography
                    fontWeight={700}
                    color="#FF2625"
                    sx={{
                        opacity: 0.15,
                        display: { xs: 'none', lg: 'block' },
                        fontSize: '220px',
                        zIndex: -1,
                        fontStyle: 'italic',
                        letterSpacing: '20px',
                    }}
                    fontFamily="Josefin Sans"
                >
                    Ejercicios
                </Typography>
            </Box>
            <Box
                sx={{
                    zIndex: 1,
                    display: { xs: 'none', lg: 'block' },
                }}
            >
                <img
                    src={HeroBannerImage}
                    alt="hero"
                    style={{
                        borderBottomLeftRadius: '10%',
                        objectFit: 'contain',
                        objectPosition: 'top',
                    }}
                    height={900}
                    width={800}
                />
            </Box>
        </Stack>
    );
};

export default HeroBanner;
