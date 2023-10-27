import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fatchData } from '../../utils/api'
import { Stack, Box, Typography } from '@mui/material'
import ReactPlayer from "react-player";
import { Videos } from '../index'
import { CheckCircle } from '@mui/icons-material';


const VideoDetails = () => {
  const params = useParams()
  const [videoDetails, setVideoDetails] = useState()
  const [videos, setVideos] = useState()

  useEffect(() => {
    const result = async () => {
      const data = await fatchData(`videos?part=snippet,statistics&id=${params.videoId}`)
      console.log(data.items[0])
      setVideoDetails(data?.items[0])

      const videosData = await fatchData(`search?part=snippet&relatedToVideoId=${params.videoId}&type=video`)
      setVideos(videosData?.items)
    }
    result()
  }, [params.videoId])


  return (
    <Box minHeight="95vh">
      <Stack direction={{md: 'row', xs: 'column'}}>
        <Box sx={{flex: 1}}>
          <Box sx={{width:'100%', position: "sticky", top: "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${params.videoId}`} controls className="player"/>
            <Typography fontWeight='bold' p={2} color="#fff" variant="h5">
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' px={2} py={1}>
              <Link to={`/channels/${videoDetails?.snippet?.channelId}`}>
                <Typography color="#fff">
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircle sx={{fontSize: '12px', ml: "5px", color: 'gray'}}/>
                </Typography>
              </Link>
              <Stack direction='row' gap={2} sx={{color:"#fff"}} alignItems='center'> 
                <Typography  variant="body1">
                  {videoDetails?.statistics?.viewCount} Views
                </Typography>
                <Typography variant="body1">
                  {videoDetails?.statistics?.likeCount} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails;

