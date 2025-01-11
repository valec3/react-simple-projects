import { getRelatedVideos } from '../services/api';
import { Typography, Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
const ExerciseVideos = ({ query }) => {
    const [videos, setVideos] = useState([
        {
            video: {
                channelId: 'UCXSRXzrGjMeG7MevaggzUnA',
                channelName: 'TICKETY- BOO',
                lengthText: '0:12',
                publishedTimeText: '3 years ago',
                thumbnails: [
                    {
                        height: 202,
                        url: 'https://i.ytimg.com/vi/iIN170lGiXk/hq720_2.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4Ad4DgALgA4oCDAgAEAEYTCBjKGUwDw==&rs=AOn4CLBIqnLsDeQ16jrJ0iKIE5ZYilhqYg',
                        width: 360,
                    },
                    {
                        height: 404,
                        url: 'https://i.ytimg.com/vi/iIN170lGiXk/hq720_2.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGADwAQH4Ad4DgALgA4oCDAgAEAEYTCBjKGUwDw==&rs=AOn4CLAKFWdVolwHpRXBNFwPpFth67_arQ',
                        width: 720,
                    },
                ],
                title: "🤣🤣🤣🤣🤣Hello it's me",
                videoId: 'iIN170lGiXk',
                viewCountText: '3,241,280 views',
            },
        },
        {
            video: {
                channelId: 'UCpDJl2EmP7Oh90Vylx0dZtA',
                channelName: "Spinnin' Records",
                description:
                    "Spinnin' Records proudly presents Martin Solveig & Dragonette - ",
                lengthText: '4:03',
                publishedTimeText: '14 years ago',
                thumbnails: [
                    {
                        height: 270,
                        url: 'https://i.ytimg.com/vi/LnET4RKXx5k/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtTsS8Z8Fbo69vFAGokWTTbNQTrg',
                        width: 480,
                    },
                ],
                title: 'Martin Solveig & Dragonette - Hello (Official Music Video) [HD]',
                videoId: 'LnET4RKXx5k',
                viewCountText: '24,969,073 views',
            },
        },
        {
            video: {
                channelId: 'UC5HPMnG14ZkcRfTS2eLGEog',
                channelName: "O'Shea Jackson",
                description:
                    'War & Peace Vol. 2 (The Peace Disc) is the sixth studio album by American rapper Ice Cube, released March 21, 2000 on Priority ...',
                lengthText: '3:59',
                publishedTimeText: '12 years ago',
                thumbnails: [
                    {
                        height: 202,
                        url: 'https://i.ytimg.com/vi/jK5FOyMhDOY/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmu1tz11P7_MXGO_Tr0dacDeTfSQ',
                        width: 360,
                    },
                    {
                        height: 404,
                        url: 'https://i.ytimg.com/vi/jK5FOyMhDOY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD3yutkv2GoTTiz4P57A87oYPE_Kw',
                        width: 720,
                    },
                ],
                title: '01 - Ice Cube - Hello',
                videoId: 'jK5FOyMhDOY',
                viewCountText: '9,896,507 views',
            },
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setIsLoading(true);
                const fetchedData = await getRelatedVideos(query);
                setVideos(fetchedData.contents);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching related videos:', error);
            }
        };
        fetchVideos();
    }, [query]);
    return (
        <Box sx={{ marginTop: { lg: '40px', xs: '20px' } }} p="20px">
            <Typography
                sx={{ fontSize: { lg: '40px', xs: '20px' } }}
                fontWeight={700}
                mb="33px"
            >
                Videos relacionados a{' '}
                <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
                    {query}
                </span>{' '}
            </Typography>
            <Stack
                sx={{
                    flexDirection: 'row',
                    gap: { md: '50px', xs: '20px' },
                }}
                justifyContent="space-between"
                flexWrap="wrap"
                alignItems="center"
            >
                {videos?.slice(0, 3)?.map((item, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '15px',
                            overflow: 'hidden',
                        }}
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={item.video.thumbnails[0].url}
                            alt={item.video.title}
                            style={{
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box p={1}>
                            <Typography
                                sx={{ fontSize: { lg: '28px', xs: '18px' } }}
                                fontWeight={600}
                                color="#000"
                                noWrap
                            >
                                {item.video.title}
                            </Typography>
                            <Typography fontSize="14px" color="#000">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
