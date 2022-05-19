import React from 'react'
import Navbar from './Navbar'
import {Grid,Button} from '@mui/material';
import Hero from './Hero/index'
import Footer from './Footer/Footer'
import Items from './videos/index';
import Item from './videos/vidcard';
import {Link} from 'react-router-dom';
import { convertFromHTML, ContentState,EditorState } from 'draft-js'


function Homeuser(props) {

  return (
    <div style={{fontSize: "80%" }}>
              
    <Navbar user={props.user} />
    <Hero />
    <h1 style={{fontSize:'3vw',padding:'3%', textAlign: "left"}}>Videos</h1>
    <Item />
  
    <h1 style={{fontSize:'3vw', textAlign: "left"}}>Digital magazines</h1>
    <Items />
    <hr />
    <Grid container style={{justifyContent: "center", padding:"5%"}}>
      <Grid item sm={4}>
      <Link to="/sc"><Button fullWidth variant='contained'>
      Discover Screenplays
    </Button></Link>
    </Grid>
    </Grid>

    <hr />
  
 
 <Footer />
    </div>
  )
}

export default Homeuser