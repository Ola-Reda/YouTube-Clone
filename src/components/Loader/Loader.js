import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '87vh'}}>
            <CircularProgress/>
        </Box>
    )
}

export default Loader