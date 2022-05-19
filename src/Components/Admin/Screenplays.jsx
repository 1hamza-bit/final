import React, {useState} from 'react';
import SwipeableTemporaryDrawer from './Sidebar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Alert, Button, Divider, Toolbar } from '@mui/material';
import axios from 'axios'


function Screenplays(props) {

  const [title, settitle] = useState(null);
  const [writer, setwriter] = useState(null);
  const [uploadProgress2, setuploadProgress2] = useState(null);
  const [file, setfile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', title)
    fd.append('writer', writer)
    fd.append('id', props.user._id)
    fd.append('file', file, file.name)

  const ress = await axios.post('https://videos-backends.herokuapp.com/screenplays', fd, {
    onUploadProgress: progressEvent => {
      setuploadProgress2('Uploading File ' + Math.round( progressEvent.loaded / progressEvent.total * 100) + '%')
    }
  })
    setuploadProgress2(ress.data.message)
  }


  return (
    <div className='body'>
        <SwipeableTemporaryDrawer>
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999}}>
              { uploadProgress2 && <Alert severity="info">{uploadProgress2}</Alert>}
            </div>
            <Typography variant="h3" component="div" gutterBottom>
                Add Screenplays
            </Typography>
            <Toolbar/>
            <form onSubmit={submitHandler}>
                <TextField onChange={(e) => settitle(e.target.value)} required id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
                <TextField onChange={(e) => setwriter(e.target.value)} required id="filled-basic" label="Writer" variant="filled" /> <br/> <br/> 
                <input onChange={(e) => setfile(e.target.files[0])} type="file" required/>
            
        <br/><br/>
        <Divider/>
        <br/>
        <Button type="submit" variant="contained" fullWidth>Submit</Button>
        </form>
        </SwipeableTemporaryDrawer>
    </div>
  )
}

export default Screenplays