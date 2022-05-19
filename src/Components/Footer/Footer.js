import React, { Component } from 'react';
import './Footer.css'
import {Grid,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';


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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries</p>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4} >
                        <h2>MENU</h2>
                        <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Movies" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Digital Magazines" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Screenplays" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Other Media" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
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
        <p><b> Contact no</b>: 390385938</p>
        
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