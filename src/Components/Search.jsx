import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import { Grid } from '@mui/material';
import Card from './videos/card'

function Search(props) {

    const params = useParams();
    const data = params.data;

    let navigate = useNavigate();

    const [sdata, setsdata] = useState(null);

    const fetchdata = async () => {
        const getData = await axios.get('https://videos-backends.herokuapp.com/search/' + data);
        setsdata(getData.data)
    };

    useEffect(() => {
      fetchdata();
    })
    

  return (
    <div>
        <Navbar user={props.user}/>
        {
            sdata &&
            <div>
                <h1>Videos</h1>
                <Grid  fullWidth container spacing={4}>
                   {
                     sdata.videos ? 
                     sdata.videos.map(video => 
                       <Grid item sm={12} md={6} lg={4}  >
                       <div key={video._id} onClick={() => navigate(`/Videos/${video._id}`)}>
                         <Card video={video}/>
                       </div>
                       </Grid>
                       )
                   : <div style={{padding: "5%", color: ""}}><h3>Sorry there is no Data avaliable</h3></div>}
                   </Grid>
            <h1>Screenplays</h1>
            {sdata.screenplays.map(screenplay => <h1>{screenplay.title}</h1>)}
            <h1>Magazines</h1>
            {sdata.magazines.map(magazine => <h1>{magazine.title}</h1>)}
            </div>
        }
        <Footer/>
    </div>
  )
}

export default Search