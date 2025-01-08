import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo.png';
const Navbar = () => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="none"
            alignItems={{ xs: 'center', sm: 'flex-end' }}
            width={'100%'}
            gap={{ xs: '5px', md: '50px' }}
            sx={{
                pt: { sm: '32px', xs: '20px' },
                pb: { sm: '12px', xs: '5px' },
                backgroundColor: '#fff',
                left: 0,
                top: 0,
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))',
                opacity: 0.95,
            }}
            position={{ md: 'fixed', xs: 'static' }}
        >
            <Link to="/">
                <img
                    src={Logo}
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        marginInline: '20px',
                    }}
                />
            </Link>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                gap={{ xs: 1, sm: 4 }}
                fontSize={20}
                alignItems={{ xs: 'center', sm: 'flex-end' }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: '#3A1212',
                        borderBottom: '2px solid #FF2625',
                    }}
                >
                    Inicio
                </Link>
                <a
                    href="#exercises"
                    style={{
                        textDecoration: 'none',
                        color: '#3A1212',
                        borderBottom: '2px solid #FF2625',
                    }}
                >
                    Ejercicios
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
