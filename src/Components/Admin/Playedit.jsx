import { Button, Divider, TextField, Toolbar, Typography, Alert } from '@mui/material'
import React,{useState} from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Playedit() {

  const params = useParams();
  const id = params.id;

  const [title, settitle] = useState(null);
  const [writer, setwriter] = useState(null);
  const [loading, setloading] = useState(false);
  const [uploadProgress2, setuploadProgress2] = useState(null);


  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      writer: writer,
      id: id,
    };
    const update = await axios.post('http://videos-backends.herokuapp.com/screenplaysu',data);
    setuploadProgress2(update.data.message);
  };

  const fetchData = async () => {
    const ress = await axios.get('http://videos-backends.herokuapp.com/screenplays/' + id);
    settitle(ress.data.title);
    setwriter(ress.data.writer);
    setloading(true);
  };

  React.useEffect(() => {
    fetchData();
  }, [])
  




  return (
    <ResponsiveDrawer className='body'>
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999}}>
          { uploadProgress2 && <Alert severity="info">{uploadProgress2}</Alert>}
        </div>
      <Typography variant="h3" component="div" gutterBottom>
          Update Screenplay
      </Typography>
      <Toolbar/>
      {
        loading ?
        <form onSubmit={submitHandler}>
            <TextField value={title} required onChange={(e) => settitle(e.target.value)} id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
            <TextField value={writer} required onChange={(e) => setwriter(e.target.value)} id="filled-basic" label="Writer" variant="filled" /> <br/> <br/> 
            <Divider/>
            <br/>
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
      </form>
      :
      "Loading"
      }
    </ResponsiveDrawer>
  )
}

export default Playedit