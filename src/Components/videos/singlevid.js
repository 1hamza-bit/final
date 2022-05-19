import React, { useEffect } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactPlayer from 'react-player/lazy';
import {Grid,Button} from '@mui/material';
import Vid1 from '../videos/vid1.mp4';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


 
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
                  

                </Grid> 
       
        
          
                <Button style={{position: "fixed", bottom: "0"}} onClick={() => navigate(-1)}>go back</Button>
</div>
                :
                "Loading"
                }
                </div>
        );
    }

 
export default Singlevid;