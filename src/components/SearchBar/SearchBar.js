import React, {useState} from 'react'
import { Box, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`search/${searchItem}`)
    setSearchItem('')

  }

  const inputHandler = (e) => {
    setSearchItem(e.target.value)
  }


  return (
    <Box component="form" onSubmit={submitHandler} pl={2} sx={{background: "white", borderRadius: 20, border: '1px solid #e3e3e3', mr:{sm: 5}}}>
      <input placeholder="Search..." className="input-search" onChange={inputHandler} value={searchItem} />
      <IconButton aria-label="search" type="submit" sx={{color: 'red', p: '10px'}}>
        <SearchIcon />
      </IconButton>
    </Box>
  )
}

export default SearchBar;