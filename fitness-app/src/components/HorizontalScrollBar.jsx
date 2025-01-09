import { Box, IconButton, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '@mui/icons-material/ArrowBackIos';
import RightArrowIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <IconButton
            onClick={() => scrollPrev()}
            sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
            }}
        >
            <LeftArrowIcon />
        </IconButton>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <IconButton
            onClick={() => scrollNext()}
            sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
            }}
        >
            <RightArrowIcon />
        </IconButton>
    );
};

const HorizontalScrollBar = ({
    data,
    setElementSelected,
    elementSelected,
    Component,
}) => {
    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{ alignCenter: false }}
            onWheel={true}
        >
            {data?.map((element) => (
                <Box
                    key={element}
                    title={element}
                    itemId={element}
                    sx={{
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
    data: PropTypes.array,
    setElementSelected: PropTypes.func,
    elementSelected: PropTypes.string,
    Component: PropTypes.elementType,
};

export default HorizontalScrollBar;
