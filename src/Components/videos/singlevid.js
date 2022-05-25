import React, { useEffect } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactPlayer from 'react-player/lazy';
import {Grid,Button} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'

 
  const Singlevid = () => {

    const [videos,setvideos] = React.useState(null);


    const navigate = useNavigate();

    const params = useParams();
    const id = params.id;

    const fetchVids = async() => {
      const ress = await axios.get('https://videos-backends.herokuapp.com/videos/' + id);
      setvideos(ress.data);
    };

    useEffect(() => {
      fetchVids();
    }, [])

        return (
          <><Navbar/>
            <div className='hero' style={{height: "100%"}}>
              
              { videos ?

              <div>

               <Grid  fullWidth style={{padding: "5%", overflow: 'hidden'}} container spacing={6}>
               <Grid item sm={12} md={8} lg={8} style={{paddingRight:'20%'}}>
                    <ReactPlayer className="player" url={videos.video}
                    
                    height='' 
                    controls={true}
                    />
                    </Grid>
                   
                   
                    <Grid item sm={12} md={3} lg={4} >
                    <div className="logo">
          <h2>
            {videos.title}
          </h2>
        </div>
                        <p>{videos.description}</p>
                    <h2></h2>
                    </Grid>
                  

                </Grid> 
       
        
          
                <Button style={{position: "fixed", bottom: "0"}} onClick={() => navigate(-1)}>go back</Button>
</div>
                :
                "Loading"
                }
                </div>
                  <Footer/>
                </>

        );
    }

 
export default Singlevid;