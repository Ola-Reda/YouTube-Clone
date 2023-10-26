import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = (props) => {
    const video = props.video

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={`/videos/${video.id.videoId}`}>
                <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title}
                    sx={{width: '100%', height: 180}}/>
            </Link>
            <CardContent sx={{backgroundColor: "#1E1E1E", height: '120px'}}>
                <Link to={`/videos/${video.id.videoId}`}>
                    <Typography variant="subtitle1" color='white' fontWeight="bold" >
                    {video?.snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={`/channels/${video.snippet.channelId}`}>
                    <Typography variant="subtitle2" color="gray">
                        {video?.snippet?.channelTitle}
                        <CheckCircle sx={{fontSize: '12px', ml: "5px"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard