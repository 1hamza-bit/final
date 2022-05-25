import React, {useState,useEffect} from 'react';
import './video.css'
import axios from 'axios';
import {Grid} from '@mui/material';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';
import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom';

const Magz = () => {

  const [magazines, setmagazines] = useState(null);

  let navigate = useNavigate();

  const fetchmagazines = async () => {
    const response = await axios.get('https://videos-backends.herokuapp.com/magazines');
    setmagazines(response.data);
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
        <Grid fullWidth container spacing={4}>
        {/* card1  */}
        {
          magazines ? 
        magazines
           &&
          magazines.map(magazines => 
            <Grid item sm={12} md={6} lg={4} key={magazines._id}>
            <div key={magazines._id} onClick={() => navigate(`/Magazines/${magazines._id}`)} className="blog">
                <div className="title-box">
    <h3>
  
    </h3>
    <hr/>
    <div className="intro">
    {magazines.title} 
    </div>
  </div>  
  <div className="info">
{parse(magazines.text)}</div>
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

</Grid>
     
            )
        
        : <div style={{padding: "5%", color: ""}}><h3>Sorry there is no Data avaliable</h3></div> }   
  </Grid>
    </div>
    <Footer/>
    </>
  );
};
export default Magz;