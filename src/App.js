import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Feed, NotFound, VideoDetails, ChannelDetails, SearchFeed } from './components/index'
import { Box } from '@mui/material'

function App() {
  return (
    <>
      <Navbar/>
      <Box sx={{backgroundColor: '#000'}}>
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/videos/:videoId" element={<VideoDetails/>}/>
          <Route path="/channels/:channelId" element={<ChannelDetails/>}/>
          <Route path="/search/:searchItem" element={<SearchFeed/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Box>
    </>
  );
}

export default App;
