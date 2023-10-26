import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = (props) => {
  const channel = props.channel

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', margin: 'auto', width: { xs: '356px', md: '320px' }, boxShadow: "none", borderRadius: '20px',}}>
      <Link to={`/channels/${channel?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <CardMedia image={channel?.snippet?.thumbnails?.high?.url} alt={channel?.snippet?.title} sx={{width: '180px', height: 180, mb: 2, borderRadius: '50%'}}/>
          <Typography variant="h6" color="white">
              {channel?.snippet?.title}
              <CheckCircle sx={{fontSize: '14px', ml: "5px", color: 'gray'}}/>
          </Typography>
          {
            channel?.statistics &&
            <Typography color="gray">
              {channel?.statistics?.subscriberCount} Subscriber
            </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard