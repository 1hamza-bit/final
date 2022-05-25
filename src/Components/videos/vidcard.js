import React, {useState,useEffect} from 'react';
import './video.css'
import Card from  './card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
 
function Item() {


  const [videos, setvideos] = useState(null);

  let navigate = useNavigate();

  const fetchVideos = async () => {
    const response = await axios.get('https://videos-backends.herokuapp.com/videos');
    setvideos(response.data)
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
   <div className='slides'>
       
       
      <Slider {...settings}>

        {
          videos &&
          videos.map(video => 
            <div key={video._id} onClick={() => navigate(`/Videos/${video._id}`)}>
              <Card video={video}/>
            </div>
            )
        }
       
        </Slider>
    </div>
  );
}

export default Item;