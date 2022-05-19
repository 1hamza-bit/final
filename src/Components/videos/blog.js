import React, { useState } from 'react';
  import {Container,Grid,Button,TextField,Modal,Box,Typography,Switch,
    Select,InputLabel,MenuItem,FormControl,Card,CardContent, FormControlLabel,
  Radio,RadioGroup,Divider,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
  import './blog.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';
    

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
              <div>
                <Grid container spacing={4}>
                <Grid item sm={12}>
                    <div className='single' >
                <h1>gkj</h1>
                </div>
                </Grid>

                <Grid item sm={3}>
                    <div className="side">
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
      </div>

                </Grid>
                <Grid item sm={9}>
                <div class="wrapper">
		<h1>{magazine.title}</h1>
		<section>
			<h2 class="title">Intro</h2>
			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named <span>Duden </span>flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		</section>
		<section>
			<h2 class="title">World of Grammar</h2>
			<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <span>World of Grammar</span>. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
		</section>
		<section>
			<h2 class="title">Line Lane</h2>
			<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
		</section>
		<section>
			<h2 class="title">Blind text</h2>
			<p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.</p>
		</section>
		<section>
			<h2 class="title"> Conclusion</h2>
			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline</p>
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