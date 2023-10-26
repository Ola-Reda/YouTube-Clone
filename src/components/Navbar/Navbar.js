import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { logo } from '../../utils/constants'
import { SearchBar } from '../index';


const Navbar = () => {
  return (
      <Stack direction="row" sx={{position: 'sticky', top: 0, background: '#000', padding: 2, alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to="/">
          <img src={logo} height={45} alt="logo"/>
        </Link>
        <SearchBar/>
      </Stack>
  )
}

export default Navbar