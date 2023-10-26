import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { fatchData } from '../../utils/api'
import { Videos } from '../index'

const SearchFeed = () => {
    const params = useParams()
    const [videos, setVideos] = useState([])

    useEffect(()=> {
        fatchData(`search?part=snippet&q=${params.searchItem}`).then(data => setVideos(data.items))
    }, [params.searchItem])

    return (
        <Box sx={{p: 2, height: '95vh', flex: 2, overflowY: 'auto'}}>
            <Typography sx={{color: 'white', fontWeight: 'bold', mb: 2}} variant='h4'>
                Search Results for <span style={{color: "#FC1503"}}>{params.searchItem}</span> Videos
            </Typography>
            <Videos videos={videos}/>
        </Box>
    )
}

export default SearchFeed