import { Paper, Typography , Button, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Managemag() {

    let navigate = useNavigate();

    const [mags, setmags] = useState(null);

    const fetchPlays = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/magazines');
        setmags(ress.data);
    };

    useEffect(() => {
      fetchPlays();
    }, []);

    const deleteMag = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/md/' + id);
        setmags(mags.filter(item => item._id !== id));
    };


  return (
    <div className='body'>
        <ResponsiveDrawer>
        {
                mags &&
                <Paper elevation={3} style={{padding:20}}>
                    {mags.map(mag =>
                        <div key={mag._id} style={{display:'flex',alignItems:'center',padding:8}}>
                            <Typography component="p" variant="h7">
                                {mag.title}
                            </Typography>
                            <Typography color="text.secondary" style={{ flex: 1 , display: 'flex' , justifyContent:'center' }}>
                                {mag.title}
                            </Typography>
                            <div>
                                <Button variant="contained" style={{marginRight:7}} onClick={() => navigate(`/update_magazine/${mag._id}`)}>
                                    Edit
                                </Button>
                                <Button variant="contained" onClick={() => deleteMag(mag._id)}>
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

export default Managemag