import { Box, Stack} from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from '../index'

const Videos = (props) => {
    const videos = props.videos

    return (
        <Stack direction='row' flexWrap='wrap' gap={2} justifyContent="center" alignItems="center" >
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