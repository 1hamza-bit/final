import React, { Component } from 'react';
import './Footer.css'
import {Grid,Divider,List,ListItem,ListItemButton,ListItemText,Button,Link} from '@mui/material';


class Footer extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <div className='footer'>
                <Grid  fullWidth container spacing={4}>
                    <Grid item sm={12} md={6} lg={4}  >
                    <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>
                        <p>Reinvokes was created to give a platform to independent filmmakers and emerging studio's to share their work.
                           Created by Kinoverse Corp it is dedicated to showcasing the amazing work and talents
                            of Kinoverse and KV flow users.</p>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4} >
                        <h2>Want to submit your film or media?</h2>
                        <Divider />
                    <Button style={{margin: "1%"}} variant="contained" href="/register"> Apply here -> </Button>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>
                        <h2>About</h2>
                        <Divider />
                        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Terms Conitions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Privacy policy" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <h2>Contact us</h2>
        <br/>
        <p><b> Email us at</b>: Info@reinvokes.com</p>
        
                    </Grid>
                    
                </Grid>
            </div>
            <div class="bottom">
              <h3>Copyright 2022 , Reinvokes</h3>
            </div>
            </>

        );
    }
}
 
export default Footer;