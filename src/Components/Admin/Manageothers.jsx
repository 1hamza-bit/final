import { Paper, Typography , Button, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Manageothers() {

    let navigate = useNavigate();

    const [plays, setplays] = useState(null);

    const fetchPlays = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/others');
        setplays(ress.data);
    };

    useEffect(() => {
      fetchPlays();
    }, []);

    const deletePlay = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/od/' + id);
        setplays(plays.filter(item => item._id !== id));
    };


  return (
    <div className='body'>
        <ResponsiveDrawer>
        {
                plays &&
                <Paper elevation={3} style={{padding:20}}>
                    {plays.map(play =>
                        <div key={play._id} style={{display:'flex',alignItems:'center',padding:8}}>
                            <Typography component="p" variant="h7">
                                {play.title}
                            </Typography>
                            <Typography color="text.secondary" style={{ flex: 1 , display: 'flex' , justifyContent:'center' }}>
                                {play.title}
                            </Typography>
                            <div>
                                <Button variant="contained" style={{marginRight:7}} onClick={() => navigate(`/update_others/${play._id}`)}>
                                    Edit
                                </Button>
                                <Button variant="contained" onClick={() => deletePlay(play._id)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )}
                </Paper>
            }
        </ResponsiveDrawer>
    </div>
  )
}

export default Manageothers