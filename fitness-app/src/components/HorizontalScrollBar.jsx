import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import BodyPart from './BodyPart';
const HorizontalScrollBar = ({ data }) => {
    return (
        <div>
            {data?.map((element) => (
                <Box key={element} title={element}>
                    <BodyPart title={element} />
                </Box>
            ))}
        </div>
    );
};

HorizontalScrollBar.propTypes = {
    data: PropTypes.array,
};

export default HorizontalScrollBar;
