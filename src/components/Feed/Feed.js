import React, { useState, useEffect } from 'react'
import { Sidebar, Videos } from '../index'
import { Stack, Box, Typography } from '@mui/material'
import { fatchData } from '../../utils/api'

const Feed = () => {
  const [categoryName, setCategoryName] = useState("New")
  const [videos, setVideos] = useState([])

  const categoryNameHandler = (name) => {
    setCategoryName(name)
  }

  useEffect(() => {
    fatchData(`search?part=snippet&q=${categoryName}`).then(data => setVideos(data.items))
  }, [categoryName])


  return (
    <Stack sx={{flexDirection: {xs: 'column', md: "row"}}}>
      <Box sx={{borderRight: '1px solid #3d3d3d', px: 2 }}>
        <Sidebar categoryName={categoryName} setCategoryName={categoryNameHandler}/>
        <Typography sx={{color: '#fff', mt: 1.5}} className="Copyright"  variant="body2">
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
      <Box sx={{p: 2, height: '95vh', flex: 2, overflowY: 'auto'}}>
        <Typography sx={{color: 'white', fontWeight: 'bold', mb: 2}} variant='h4'>
          {categoryName} <span style={{color: "#FC1503"}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;