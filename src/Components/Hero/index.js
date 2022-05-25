import React, { Component } from 'react';
import './Hero.css'
import Carousel from 'nuka-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactPlayer from 'react-player/lazy';
import {Grid} from '@mui/material';
import Vid1 from '../videos/vid1.mp4';

import { Player } from 'video-react';

 
  const Hero = () => {
 
        return (
            <div>
                <Carousel>
               < Grid className='hero' fullWidth style={{ overflow: 'hidden'}} container spacing={6}>
                    <Grid item sm={12} md={6} lg={6} >
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Reinvokes was created to give a platform to independent filmmakers and emerging studio's to share their work.
                           Created by
                           Kinoverse Corp it is dedicated to showcasing the amazing work and talents of Kinoverse and KV flow users.</p>
                    <h2></h2>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} style={{paddingRight:'20%'}}>
                    <ReactPlayer url={Vid1}
                    width='400px'
                    height='' 
                    controls={true}
                    className="player1"
                    />
                    </Grid>

                </Grid> 
        <Grid className='hero' fullWidth style={{ overflow: 'hidden'}} container spacing={6}>
                    <Grid item sm={12} md={6} lg={6}>
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries</p>
                    <h2></h2>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                    <ReactPlayer url={Vid1}
                    width='400px'
                    height='' 
                    controls={true}
                    className="player1"
                    />
                    </Grid>
                </Grid>


        <Grid className='hero' fullWidth style={{ overflow: 'hidden'}} container spacing={6}>
                    <Grid item sm={12} md={6} lg={6}>
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries</p>
                    <h2></h2>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                    <ReactPlayer url={Vid1}
                    width='400px'
                    height='' 
                    controls={true}
                    className="player1"
                    />
                    </Grid>
                </Grid>
        
      </Carousel>
      
        
          
          
                </div>
        );
    }

 
export default Hero;