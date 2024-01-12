import React from 'react'
import { Card7 } from '../../components/Card'
import TextField from '@mui/material/TextField';
import { Card4 } from '../../components/Card';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className='text-center'>
        <p className='text-gray-500 md:text-[120%] lg:text-[130%]'>
        Our events
        </p>
        <h1 className='font-black flex m-auto md:w-[40%] md:text-[140%] lg:w-[30%] lg:text-[170%] text-[110%] w-[70%]'>
        Lectures, workshops & master-classes
        </h1>
      </div>
      <div> 
      </div>
      <div className='flex gap-[4%] flex-wrap p-[5%]'>
      <Card7 h1={ "Event category" }/>
      <Card7 h1={ "Sort by" }/>
      <Card7 h1={ "Show" }/>
      <TextField id="outlined-basic" size='small' label="Search event..." variant="outlined" />

      </div>

      <div>
      <Card4 h1={"05"} h2={"August"} span={"11:00 – 14:00"} p={"Formation of the organizational structure of the company in the face of uncertainty."} span2={"Onine master-class"} btn={"View more"} />
      <Card4 h1={"24"} h2={"July"} span={"11:00 – 12:30"} p={"Building a customer service department. Best Practices."} span2={"Onine lecture"} btn={"View more"} />
      <Card4 h1={"16"} h2={"July"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      <Card4 h1={"10"} h2={"July"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      <Card4 h1={"27"} h2={"June"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      <Card4 h1={"15"} h2={"June"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      <Card4 h1={"02"} h2={"June"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      <Card4 h1={"29"} h2={"June"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      <Card4 h1={"18"} h2={"June"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      </div>

    </div>
  )
}

export default About