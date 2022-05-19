import React, {useState,useEffect} from 'react';
import './video.css'
import Card from  './card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {Grid,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';
 
function Vids() {


  const [videos, setvideos] = useState(null);

  const fetchVideos = async () => {
    const response = await axios.get('https://videos-backends.herokuapp.com/videos');
    setvideos(response.data)
    console.log(response.data)
  };

  useEffect(() => {
    fetchVideos();
  }, [])
  
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

  return (
    <>
    <Navbar/>
   <div style={{padding: "3%"}}>
<h2>Movies</h2>
<br/>
<Grid  fullWidth container spacing={4}>
                   
   

        {
          videos ? 
          videos.map(video => 
            <Grid item sm={12} md={6} lg={4}  >
            <div>
              <Card video={video}/>
            </div>
            )
        : <div style={{padding: "5%", color: ""}}><h3>Sorry there is no Data avaliable</h3></div>}
       
       </Grid>
        </Grid>
    </div>
    <Footer/>
    </>
  );
}

export default Vids;