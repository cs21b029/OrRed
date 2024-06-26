import React from 'react'
import { Typography } from '@mui/material'
import './Thankyou.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFoodStore } from './Store';


const Thankyou = () => {
  // const setCurrentPage = useFoodStore((state) => state.setCurrentPage);
  return (
    <div className='thankspage'>
      {/* <ArrowBackIcon 
        className='back-button'
        onClick={() => setCurrentPage(3)}
      /> */}
      <Typography variant="h2" gutterBottom className='thanks'>Thankyou for choosing us!</Typography>
      <Typography variant="h4" gutterBottom className='thanks'>Your Order is on the way.</Typography>
    </div>
  )
}

export default Thankyou
