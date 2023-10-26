import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fatchData } from '../../utils/api'
import { Box } from '@mui/material'



const VideoDetails = () => {
  const params = useParams()

  useEffect(() => {
    const result = async () => {
      const data = await fatchData(`videos?part=snippet,statistics&id=${params.videoId}`)
      console.log(data.items[0])
    }
    result()
  }, [params.videoId])


  return (
    <Box>
    
    </Box>
  )
}

export default VideoDetails;

