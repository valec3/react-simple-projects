import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo.png';
const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="none"
            alignItems="center"
            gap={{ xs: '120px', sm: '50px' }}
            sx={{ mt: { sm: '32px', xs: '20px' } }}
            position="fixed"
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
