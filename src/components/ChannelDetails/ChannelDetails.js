import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fatchData } from '../../utils/api'
import { ChannelCard, Videos } from '../index'

const ChannelDetails = () => {
  const params = useParams()
  const [channelDetails, setChannelsDetails] = useState([])
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    const result = async () => {
      const data = await fatchData(`channels?part=snippet&id=${params.channelId}`)
      setChannelsDetails(data?.items[0])

      const videosData = await fatchData(`search?id=${params.channelId}&part=snippet%2Cid&order=date`)
      setVideos(videosData?.items)
    }
    result()
  }, [params.channelId])

  return (
    <Box>
      <div style={{height: '300px', background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', zIndex: 10}}/>
      <Box marginTop= "-90px">
        <ChannelCard channel={channelDetails}/>
      </Box>
      <Box sx={{p: 2}}>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails