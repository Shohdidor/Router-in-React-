import React from 'react'
import Play from '@mui/icons-material/PlayCircleOutline';
import Button from '@mui/material/Button';
import "../../App.css"

/// IMG
import illustration from "/img/illustration.png"
import illustration2 from "/img/illustration (2).png"
import Girl from "/img/Girl.png"
import Photo1 from "/img/Photo1.png"
import Photo2 from "/img/Photo2.png"
import Photo3 from "/img/Photo3.png"
import Photo4 from "/img/Photo4.png"
import Photo5 from "/img/Photo5.png"
import Photo6 from "/img/Photo6.png"
import Logos from "/img/logos.png"
import Sertifikat from "/img/Sertifikat.png"
import Avatar from "/img/Avatar.png"

import 'animate.css';
// animate__animated 
// Card 
import Card from '../../components/Card';
import { Card2 } from '../../components/Card';
import { Card3 } from '../../components/Card';
import { Card4 } from '../../components/Card';
import { Card5 } from '../../components/Card';
import { Card6 } from '../../components/Card';

// MUI 
import Check from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

    <div className='bg-[#FEDCD2] pl-[7%] md:pt-[15%] md:mt-[-7%] md:flex pb-[7%]'>
      <div className='animate__animated animate__fadeInDown mt-[-13%] pt-[10%]'>
        <p className='flex gap-[1%]'>
          <Play className='text-red-500' />
        Play showreel
        </p>
        <h1 className='text-[150%] w-[40%] lg:text-[300%] md:text-[200%] md:w-[80%] md:pb-[5%] Text1'>
        Enjoy studying with Createx Online Courses
        </h1>
        <div className='flex gap-[5%] lg:hidden'>
        <Button size='small' sx={{border:"1px #FF3F3A solid", color:"#FF3F3A"}} variant="outlined">About us</Button>
        <Button size="small" sx={{background:"#FF3F3A"}} variant="contained">Explore courses</Button>
        </div>
     <div className='hidden lg:flex lg:gap-[5%]'>
        <Button sx={{border:"1px #FF3F3A solid", color:"#FF3F3A"}} variant="outlined">About us</Button>
        <Button sx={{background:"#FF3F3A"}} variant="contained">Explore courses</Button>
     </div>
      </div>
      <div className='pt-[5%] lg:mt-[-5%]'>
        <img src={illustration} alt="error"  className='w-[40%] md:mt-[-15%] md:w-[60%] m-auto'/>
      </div>
    </div>
      <div className='flex bg-[#FEDCD2] justify-center gap-[10%]'>
      <Card h1={"1200"} p={"Students graduated"}/>
      <Card h1={"84"} p={"Completed courses"}/>
      <Card h1={"16"} p={"Qualified tutors"}/>
      <Card h1={"5"} p={"Years of experience"}/>
      </div>

      <div className='md:flex md:items-center md:pl-[10%]'>
        <div className='w-[70%] md:w-[50%] lg:w-[30%] lg:mt-[5%] m-auto mt-[10%] mb-[4%]'>
          <img src={Girl} alt="error" className='rounded-[10px]'/>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='p-[2%] pl-[15%]'>
          <p className='font-semibold text-[100%]'>
          Who we are
          </p>
          <h1 className='font-black text-[200%] mb-[2%]'>
          Why Createx?
          </h1>
          <ul>
            <li className='flex gap-[2%] mb-[2%]'>
              <Check className='text-[red]' />
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>
            <li className='flex gap-[2%] mb-[2%]'>
              <Check className='text-[red]' />
              Vulputate placerat amet pulvinar lorem nisl.
            </li>
            <li className='flex gap-[2%] mb-[2%]'>
              <Check className='text-[red]' />
              Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
            </li>
            <li className='flex gap-[2%] mb-[2%]'>
              <Check className='text-[red]' />
              Etiam duis lobortis in fames ultrices commodo nibh.
            </li>
            <li className='flex gap-[2%] mb-[2%]'>
              <Check className='text-[red]' />
              Tincidunt sagittis neque sem ac eget.
            </li>
            <li className='flex gap-[2%] mb-[2%]'>
              <Check className='text-[red]'/>
              Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
            </li>
          </ul>
          <div className='mt-[5%]'>
          <Button variant="contained" sx={{background:"#FF3F3A", color:"white"}}>More about us</Button>
          </div>

        </div>
      </div>

      <div className='flex justify-around items-center mt-[10%] mb-[5%]'>
        <div>
        <p className='font-bold md:text-[100%] text-[80%] lg:text-[110%] mb-[2%]'>
        Ready to learn?
        </p>
        <h1 className='font-black text-[100%] md:text-[150%] lg:text-[200%]'>
        Featured Courses
        </h1>
        </div>
        <div className='lg:hidden'>
        <Button variant="outlined" size='small' sx={{border:"1px solid #FF3F3A", color:"#FF3F3A"}}>View all courses</Button>
        </div>
        <div className='hidden lg:block'>
        <Button variant="outlined"  sx={{border:"1px solid #FF3F3A", color:"#FF3F3A"}}>View all courses</Button>
        </div>

      </div>
      <div className='flex flex-wrap items-center'>
      <Card2 img={Photo6} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo5} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo4} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo3} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo2} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      <Card2 img={Photo1} h1={"The Ultimate Google Ads Training Course"} span={"Marketing"} p={"$100by Jerome Bell"}/>
      </div>
      <div className='text-center mt-[10%] mb-[1%]'>
        <p className='font-bold md:text-[150%]'>
        Our benefits
        </p>
        <h1 className='font-black text-[150%] md:text-[200%]'>
        That’s how we do it
        </h1>
      </div>

      <Card3 h1={"Only practicing tutors"} p={"Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula."} img={illustration2}/>

      <div className='bg-[#FEDCD2] pb-[1%]'>
        
      <div className='text-center mt-[10%] mb-[1%]'>
        <p className='font-bold md:text-[150%]'>
        Our benefits
        </p>
        <h1 className='font-black text-[150%] md:text-[200%]'>
        That’s how we do it
        </h1>
      </div>
      
      <div>
      <Link to={"/about"}>
      <Card4 h1={"05"} h2={"August"} span={"11:00 – 14:00"} p={"Formation of the organizational structure of the company in the face of uncertainty."} span2={"Onine master-class"} btn={"View more"} />
      </Link>
      <Link to={"/about"}>
      <Card4 h1={"24"} h2={"July"} span={"11:00 – 12:30"} p={"Building a customer service department. Best Practices."} span2={"Onine lecture"} btn={"View more"} />
      </Link>
      <Link to={"/about"}>
      <Card4 h1={"16"} h2={"July"} span={"10:00 – 13:00"} p={"How to apply methods of speculative design in practice. Worldbuilding prototyping."} span2={"Onine workshop"} btn={"View more"} />
      </Link>
      </div>

      <div className='flex justify-center md:pr-[20%] md:ml-[10%] p-[1%] gap-[1%]'>
        <h1 className='text-[110%] m-auto font-black'>
        Do you want more?
        </h1>
        <Button variant="contained" sx={{background:"#FF3F3A"}}>Explore all events</Button>

      </div>
    
      </div>
      <Card5 h1={"Your expertise will be confirmed"} img={Logos} img2={Sertifikat} p={"Createx Certificate"} span={"We are accredited by international professional organizations and institutes:"}/>
      <div className='bg-[#F4F5F6]'>
      <Card6 h1={"What our students say"} p2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in."} p={"TESTIMONIALS"} img={Avatar} h3={"Eleanor Pena"} span={"Position, Course"}/>
      </div>

      
      


    </div>
  )
}

export default Home