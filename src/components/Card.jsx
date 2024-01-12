import React from 'react'
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card( { h1 , p }) {
  return (  
    <div className='md:flex md:flex-wrap md:items-center'>
    <h1 className='font-black text-[150%] md:text-[200%] lg:text-[250%]'>
        {h1}
    </h1>
    <p className='text-[80%] md:text-[90%] lg:text-[110%]'>
        {p}
    </p>
  </div>
  )
}

export default Card


function Card2( { img , span , h1 , p } ) {
  return (
    <div  data-aos="zoom-out-right" className='flex md:p-[2%] md:w-[50%] mb-[5%] pl-[2%]'>
        <div>
            <img src={img} alt="error" />
        </div>
        <div className='p-[2%] lg:w-[50%]'>
            <span className='text-[80%] bg-green-500 p-[2%] rounded-[50px] text-white'>
                {span}
            </span>
            <h1 className='font-bold mb-[2%] mt-[2%]'>
                {h1}
            </h1>
            <p className='text-gray-500'>
                {p}
            </p>
        </div>
    </div>
  )
}

export {Card2}


function Card3( { h1 , p , img }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500" className='flex flex-wrap md:flex p-[5%]  md:flex-nowrap'>
        <div className='pl-[4%] md:w-[100%] lg:w-[111%]'>
            <h1 className='font-black text-[140%] lg:text-[200%] mb-[2%]'>
                {h1}
            </h1>
            <p className='text-gray-600 w-[90%] lg:w-[50%] lg:text-[110%]'>
                {p}
            </p>
        </div>
        <div className='md:mt-[-5%] lg:ml-[-20%]'>
            <img src={img} className='w-[70%] md:w-[100%] m-auto pt-[5%] pb-[5%]' alt="error" />
        </div>
    </div>
  )
}

export { Card3 }


function Card4( { h1 , h2 , span , span2 , p , btn } ) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" 
    className='hover:shadow-2xl transition-[0.2s] flex items-center gap-[4%] mb-[5%] mt-[2%] md:mb-[5%] bg-white p-[5%] md:w-[90%] md:m-auto md:rounded-[5px]'>
            <h1 className='text-[#FF3F3A] md:text-[250%] font-black text-[150%] lg:text-[300%]'>
                {h1}
            </h1>
            <div className='md:w-[20%]'>
                <h2 className='font-bold lg:text-[200%] text-[110%] md:text-[140%]'>
                    {h2}
                </h2>
                <span className='text-gray-500 text-[90%] lg:text-[140%] md:text-[110]'>
                    {span}
                </span>
            </div>
            <div>
                <p className='font-bold text-[70%] md:text-[110%] lg:text-[150%]'>
                    {p}
                </p>
                <span className='text-[90%] text-gray-500 lg:text-[110%]'>
                    {span2}
                </span>
            </div>
            <div className='md:w-[40%] lg:w-[20%]'>
            <Button variant="outlined" sx= { { border:"1px solid #FF3F3A" , color : "#FF3F3A" } } >
                {btn}
            </Button>
            </div>

    </div>
  )
}

export { Card4 }

function Card5( { p , h1 , span , img , img2 } ) {
  return (
    
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className='flex justify-around p-[2%] items-center'>
    <div>
      <p className='text-[80%] font-semibold md:text-[100%] lg:text-[120%]'>
        {p}
      </p>
      <h1 className='text-[120%] font-black md:text-[150%] lg:text-[200%] lg:w-[60%] lg:mb-[2%]'>
        {h1}
      </h1>
      <span className='text-gray-700 text-[70%] md:text-[100%] lg:text-[110%]'>
        {span}
      </span>
      <img src={img} alt="error" className='hidden md:flex' />
    </div>
    <div className='w-[90%] pt-[4%] md:w-[50%] lg:w-[40%]'>
      <img src={img2} alt="error" />
    </div>
  </div>
  )
}

export { Card5 }


function Card6 ( { p , h1 , p2 , h3 , img , span} ) {
  return (
        
      <div data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0" className='text-center pb-[5%] pt-[5%]'>
      <p className='text-[80%] md:text-[110%]'>
        {p}
      </p>
      <h1 className='text -[150%] w-[100%] lg:text-[300%] md:text-[200%] md:w-[100%] md:pb-[5%] Text1'>
        {h1}
      </h1>
      <div className='bg-white p-[5%] rounded-[50px] pl-[10%] pr-[10%] md:text-[100%] text-left w-[80%] text-[80%] text-gray-700 m-auto'>
        <p className='pb-[4%] lg:text-[120%] lg:w-[90%] lg:m-auto'>
            {p2}
        </p>
        <div className='flex items-center gap-[10%] md:gap-[5%] lg:ml-[7%]'>
            <img src={img} alt="error" className='w-[15%] lg:w-[7%] md:w-[10%] ' />
            <div>
                <h3 className='font-semibold text-[90%] md:text-[120%]'>
                    {h3}
                </h3>
                <span className='text-gray-500 text-[80%] md:text-[100%]'>
                    {span}
                </span>
            </div>
        </div>
      </div>
      </div>
  )
}

export { Card6 }


function Card7( { h1 } ) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
  return (
    <div className='flex items-center gap-[4%] md:w-[21%] mb-[2%]'>
        <h1 className='font-semibold text-[90%] md:text-[110%] lg:text-[120%]'>    
        {h1}
        </h1>
        <div className='w-[30%] md:w-[100%] '>

      <FormControl fullWidth>
        <InputLabel size='small' id="demo-simple-select-label">all themes</InputLabel>
        <Select 
        size='small'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>

    </div>
  )
}

export { Card7 }