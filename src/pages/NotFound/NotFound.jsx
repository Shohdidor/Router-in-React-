import React from 'react'
import Error from "/img/404.jpg"

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className='mt-[-12%]'>
        <Link to="/">
      <img src={Error} alt="error" />
        </Link>
    </div>
  )
}

export default NotFound