import { Button, Divider, TextField, Toolbar, Typography, Alert } from '@mui/material'
import React,{useState} from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Videoedit() {

  const params = useParams();
  const id = params.id;

  const [title, settitle] = useState(null);
  const [direct, setdirect] = useState(null);
  const [desc, setdesc] = useState(null);
  const [shortDesc, setshortDesc] = useState(null);
  const [loading, setloading] = useState(false);
  const [uploadProgress2, setuploadProgress2] = useState(null);


  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: desc,
      shortDescription: shortDesc,
      director: direct,
      id: id,
    };
    const update = await axios.post('http://videos-backends.herokuapp.com/videosu',data);
    setuploadProgress2(update.data.message);
  };

  const fetchData = async () => {
    const ress = await axios.get('http://videos-backends.herokuapp.com/videos/' + id);
    settitle(ress.data.title);
    setdirect(ress.data.director);
    setdesc(ress.data.description);
    setshortDesc(ress.data.description);
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
          Update Movie
      </Typography>
      <Toolbar/>
      {
        loading ?
        <form onSubmit={submitHandler}>
            <TextField value={title} required onChange={(e) => settitle(e.target.value)} id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
            <TextField value={direct} required onChange={(e) => setdirect(e.target.value)} id="filled-basic" label="Director" variant="filled" /> <br/> <br/> 
            <TextField value={shortDesc} required onChange={(e) => setshortDesc(e.target.value)} id="filled-basic" multiline fullWidth rows={2} label="Short Descrption" variant="filled" /> <br/> <br/> 
            <TextField value={desc} required onChange={(e) => setdesc(e.target.value)} id="filled-basic" multiline fullWidth rows={4} label="Descrption" variant="filled" /> <br/> <br/> 
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

export default Videoedit