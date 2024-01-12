import React from 'react'
import { Card5 } from '../../components/Card'
import { Card6 } from '../../components/Card'
import { Card2 } from '../../components/Card'

import Photo1 from "/img/Photo1.png"
import Photo2 from "/img/Photo2.png"
import Photo3 from "/img/Photo3.png"
import Photo4 from "/img/Photo4.png"
import Photo5 from "/img/Photo5.png"
import Photo6 from "/img/Photo6.png"

import Logos from "/img/logos.png"
import Sertifikat from "/img/Sertifikat.png"
import Avatar from "/img/Avatar.png"

function Contact() {
  return (
    <div>
      <div className='flex flex-wrap items-center'>
      <Card2 img={Photo6} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo5} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo4} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo3} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo2} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo1} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      </div>
     
      <div className='bg-[#F4F5F6]'>
      <Card6 h1={"What our students say"} p2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in."} p={"TESTIMONIALS"} img={Avatar} h3={"Eleanor Pena"} span={"Position, Course"}/>
      </div>
      
            <Card5 h1={"Your expertise will be confirmed"} img={Logos} img2={Sertifikat} p={"Createx Certificate"} span={"We are accredited by international professional organizations and institutes:"}/>
    </div>
  )
}

export default Contact