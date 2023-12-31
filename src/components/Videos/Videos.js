import { Box, Stack} from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard, Loader } from '../index'

const Videos = (props) => {
    const videos = props.videos

    if(!videos) return <Loader/>

    return (
        <Stack direction={props.direction || 'row'} flexWrap='wrap' gap={2}>
        {
            videos.map((item,index) => {
                return  <Box key={index}>
                            {item.id.videoId && <VideoCard video={item}/>}
                            {item.id.channelId && <ChannelCard channel={item}/>}
                        </Box>
            })
        }
        </Stack>
    )
}

export default Videos