import { useRef, useState } from 'react';
import { Box, Stack, TextField, Typography, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getExercises } from '../services/api';
const SearchBar = ({ setSearchedExercises = () => {}, setIsLoading }) => {
    const searchInputElement = useRef();
    const handleSearch = async (e) => {
        e.preventDefault();
        const valueSearch =
            searchInputElement.current.querySelector('input').value;
        if (!valueSearch) {
            return;
        }
        setIsLoading(true);
        const data = await getExercises(valueSearch);
        setSearchedExercises(data);
        setIsLoading(false);
        console.log(data);
    };
    console.log('rendering SearchBar');
    return (
        <Stack
            alignItems={'center'}
            mt={'32px'}
            justifyContent="center"
            p={'20px'}
        >
            <Typography
                variant={'h4'}
                fontWeight={'bold'}
                sx={{
                    fontSize: { lg: '40px', md: '30px', sm: '20px' },
                    width: { lg: '50%', md: '70%', sm: '90%' },
                }}
                marginBlock={'50px'}
                textAlign={'center'}
            >
                Encuentra la rutina que mejor se adapte a ti
            </Typography>
            <Box
                position={'relative'}
                mb={'70px'}
                display={'flex'}
                justifyContent={'center'}
                sx={{
                    margin: 'auto',
                    width: { xs: '100%', md: '80%', lg: '60%' },
                }}
            >
                <TextField
                    label={'Buscar'}
                    variant={'outlined'}
                    ref={searchInputElement}
                    onChange={() => {}}
                    type="search"
                    height="76px"
                    sx={{
                        input: {
                            fontWeight: 'bold',
                            border: 'none',
                            fontSize: { lg: '17px', md: '15px', sm: '10px' },
                            height: '23px',
                        },
                        width: '100%',
                        height: '56px',
                    }}
                    color="error"
                />
                <IconButton
                    type="button"
                    sx={{
                        borderRadius: '5%',
                        height: '56px',
                        aspectRatio: '1',
                        backgroundColor: '#FF2625',
                        color: 'white',
                        ':hover': {
                            backgroundColor: '#FF1452',
                        },
                        position: 'absolute',
                        right: '0',
                        bottom: '0',
                    }}
                    aria-label="search"
                    onClick={handleSearch}
                >
                    <Search />
                </IconButton>
            </Box>
        </Stack>
    );
};

export default SearchBar;
