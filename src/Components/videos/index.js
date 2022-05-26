import React, {useState,useEffect} from 'react';
import './video.css'
import Slider from "react-slick";
import axios from 'axios';

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser'

const Items = () => {
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

  let navigate = useNavigate();
  
  

  const fetchmagazines = async () => {
    const response = await axios.get('https://videos-backends.herokuapp.com/magazines');
    setmagazines(response.data);
  };


  useEffect(() => {
    fetchmagazines();
  }, [])

  return (
    <div className='slides'>
     <Slider {...settings}>
        {/* card1  */}
        
        {magazines
           &&
          magazines.map(magazine => 
            <div key={magazine._id}>
              <div style={{background: `url(https://videos-backends.herokuapp.com/${magazine.file})`}} onClick={() => navigate(`/Magazines/${magazine._id}`)} className="blog">
                <div className="title-box">
    <h3>
  
    </h3>
    <hr/>
    <div className="intro">
    {magazine.title} 
    </div>
  </div>  
  <div className="info">
{parse(magazine.text)}</div>
<div className="foote">
  <div className="icon-holder">
    <span>
  <i className="fa fa-comment-o"></i>
    <span>12</span>
    <space></space>
    <i className="fa fa-calendar"></i>
    <span>{magazine.date}</span>
    </span>
  </div>
</div>

<div className="color-overlay"></div>
  </div>
            </div>
          
            )
        }
  

       </Slider >
    </div>
  );
};
export default Items;