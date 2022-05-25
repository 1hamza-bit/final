import React, { useState } from 'react';
  import {Container,Grid,Button,TextField,Modal,Box,Typography,Switch,
    Select,InputLabel,MenuItem,FormControl,Card,CardContent, FormControlLabel,
  Radio,RadioGroup,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
  import './blog.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';
import parse from 'html-react-parser'   

function Single () {
  const [magazine, setmagazine] = useState();
    const params = useParams();
    const id = params.id;


    const fetchPost = async () => {
      const res = await axios.get('https://videos-backends.herokuapp.com/magazines/' + id);
      setmagazine(res.data);
    }

    React.useEffect(() => {
      fetchPost();
    }, [])
    


        return (
          <>
          <Navbar />
            {
              magazine ?
              <div style={{paddingBottom: "3%"}}>
                <Grid container spacing={4}>
                <Grid className='single' item sm={12}>
                   
                <h1>gkj</h1>
                
                </Grid>
                </Grid>
                <Grid container spacing={4}>
                <Grid item sm={3}>
                    <div className="side">
                <h2>MENU</h2>
                
                        <Divider />
      <nav  aria-label="secondary mailbox folders">
        <List className='list'>
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
      </div>

                </Grid>
                <Grid item sm={9}>
                <div class="wrapper">
		<h1>{magazine.title}</h1>
		<section>
   <p>{parse(magazine.text)} </p>
		</section>
	</div>

                </Grid>
                
            </Grid>
              </div>
              :
              "Loading"
            }
            <Footer/>
            </>
        );
}
 
export default Single;