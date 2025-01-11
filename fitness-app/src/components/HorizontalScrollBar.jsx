import { Box, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '@mui/icons-material/ArrowBackIos';
import RightArrowIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <IconButton onClick={() => scrollPrev()}>
            <LeftArrowIcon />
        </IconButton>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <IconButton onClick={() => scrollNext()}>
            <RightArrowIcon />
        </IconButton>
    );
};

const HorizontalScrollBar = ({
    data,
    setElementSelected,
    elementSelected,
    Component,
    additionalProps,
}) => {
    return (
        <ScrollMenu
            sx={{
                display: 'flex',
                alignItems: 'center',
                overflowX: 'hidden',
                padding: '20px',
            }}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
        >
            {data.map((element, idx) => (
                <Box
                    key={idx}
                    itemId={idx}
                    title={element.name}
                    sx={{
                        display: 'inline-block',
                        margin: '10px',
                    }}
                >
                    <Component
                        element={element}
                        setElementSelected={setElementSelected}
                        elementSelected={elementSelected}
                    />
                </Box>
            ))}
        </ScrollMenu>
    );
};

HorizontalScrollBar.propTypes = {
    data: PropTypes.array.isRequired,
    setElementSelected: PropTypes.func.isRequired,
    elementSelected: PropTypes.string,
    Component: PropTypes.elementType.isRequired,
};

export default HorizontalScrollBar;
