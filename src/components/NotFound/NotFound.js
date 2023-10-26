import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material'

const NotFound = () => {
  return (
    <Box sx={{height: '87vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant="h3" sx={{color: 'red', mb: 2, fontWeight: 500}}>
        The Page Not Found
      </Typography>
      <Link to="/" style={{color: 'white', fontWeight: 500, fontSize: 20, display: 'flex', alignItems: 'center'}}>
        <span style={{marginRight: '10px'}}>
          <Home/>
        </span>
        <span>
          Go To Home Page
        </span>
      </Link>
    </Box>
  )
}

export default NotFound