import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../../utils/constants'


const Sidebar = (props) => {
  return (
    <Stack direction="row" sx={{flexDirection: {md: 'column'}, overflowY: 'auto', height: {xs:  'auto', md: '92vh'}}}>
        {
          categories.map(category => {
            return  <button key={category.name} className="category-btn" style={{ color: 'white', background : category.name === props.categoryName && '#FC1503'}} onClick={() => props.setCategoryName(category.name)}>
                      <span style={{marginRight: '15px', color : category.name === props.categoryName ?'white' : 'red' }}>{category.icon}</span>
                      <span style={{opacity : category.name === props.categoryName ? '1' : '0.8' }}>{category.name}</span>
                    </button>
          })
        }
    </Stack>
  )
}

export default Sidebar