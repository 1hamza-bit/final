import React, {useState,useEffect} from 'react';
import './video.css'
import Slider from "react-slick";
import axios from 'axios';
import {Grid,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Magz = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [magazines, setmagazines] = useState(null);
  const chevronWidth = 40;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  

  const fetchmagazines = async () => {
    const response = await axios.get('https://videos-backends.herokuapp.com/magazines');
    setmagazines(response.data);

    console.log(response.data)
  };

  useEffect(() => {
    fetchmagazines();
  }, [])

  return (
    <>
    <Navbar />
    <div style={{  padding:"5%" }}>
      <h2>Digital Magazines</h2>
      <br/>
        <Grid  fullWidth container spacing={4}>
                    <Grid item sm={12} md={6} lg={4}  >
   
        {/* card1  */}
        
        {magazines
           &&
          magazines.map(magazines => 
            <div className="blog">
                <div className="title-box">
    <h3>
  
    </h3>
    <hr/>
    <div className="intro">
    {magazines.title} 
    </div>
  </div>  
  <div className="info">
{magazines.text}</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>{magazines.date}</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
</div>
          
            )
        }
  
  </Grid>
  </Grid>
    </div>
    <Footer/>
    </>
  );
};
export default Magz;