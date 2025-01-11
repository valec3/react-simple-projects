import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box p={2}>
            <Typography
                variant="body2"
                align="center"
                color="textSecondary"
                fontWeight={900}
            >
                Hecho con ❤️ por{' '}
                <Link
                    href="https://github.com/valec3"
                    color="error"
                    underline="hover"
                >
                    Valece
                </Link>{' '}
                insipirado en{' '}
                <Link
                    href="https://www.youtube.com/watch?v=KBpoBc98BwM&t=653s&ab_channel=JavaScriptMastery"
                    color="info"
                    underline="hover"
                >
                    JS Mastery
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
