import { Button, Divider, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'

function Addother(props) {

    const [title, settitle] = useState(null);
    const [desc, setdesc] = useState(null);
    const [url, seturl] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: desc,
            video: url,
            id: props.user._id
        };
        const ress = await axios.post('https://videos-backends.herokuapp.com/others', data)
        alert(ress.data.message);
    }

  return (
    <ResponsiveDrawer>
            <Typography variant="h3" component="div" gutterBottom>
                Add Other Media
            </Typography>
            <Toolbar/>
            <form onSubmit={submitHandler}>
                <TextField required onChange={(e) => settitle(e.target.value)} id="filled-basic" label="Title" variant="filled" /> <br/> <br/>
                <TextField required onChange={(e) => setdesc(e.target.value)} id="filled-basic" label="Description" multiline fullWidth rows={2} variant="filled" /> <br/> <br/> 
                <TextField required onChange={(e) => seturl(e.target.value)} id="filled-basic" label="Youtube Video Link" variant="filled" /> <br/> <br/> 
                <Divider/>
                <br />
                <Button variant="contained" fullWidth type="submit">Submit</Button> 
            </form>
    </ResponsiveDrawer>
  )
}

export default Addother