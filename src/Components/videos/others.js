import React, {useRef, useState,useEffect} from 'react';
import './video.css'
import Card from  './card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {Grid} from '@mui/material';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

function Otherz() {


  const [others, setothers] = useState(null);

  let navigate = useNavigate();

  const video = useRef();

  const play = () => {
    video.current.play();
  };

  const stop = () => {
    video.current.pause();
  };


  const fetchOthers = async () => {
    const response = await axios.get('https://videos-backends.herokuapp.com/others');
    setothers(response.data)
  };

  useEffect(() => {
    fetchOthers();
  }, [])
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 2,
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
            slidesToShow: 2,
            slidesToScroll: 2
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
          others ? 
          others.map(others => 
            <Grid item sm={12} md={6} lg={4}  >
            <div key={others._id} onClick={() => navigate(`/Others/${others._id}`)}>
            
            <div className='whole'>
      <div onMouseEnter={play} onMouseLeave={stop} className="wrapper">
        <video loop ref={video} className='video' muted src={others.video}></video>
      </div>
      <div className="text">{others.title}</div>
    </div>            </div>
            </Grid>
            )
        : <div style={{padding: "5%", color: ""}}><h3>Sorry there is no Data avaliable</h3></div>}
        </Grid>
    </div>
    <Footer/>
    </>
  );
}

export default Otherz;