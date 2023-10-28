import React from 'react'
import { Box, Stack, CircularProgress } from '@mui/material'

const Loader = () => {
    return (
        <Box minHeight="95vh">
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', height: '87vh'}}>
                <CircularProgress/>
            </Stack>
        </Box>
    )
}

export default Loader