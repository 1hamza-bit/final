import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Alert, Button, Divider, Toolbar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar'


function UploadVideos(props) {

  const [title, settitle] = useState(null);
  const [desc, setdesc] = useState(null);
  const [shortDesc, setshortDesc] = useState(null);
  const [direct, setdirect] = useState(null);
  const [category, setcategory] = useState(null);
  const [categories, setcategories] = useState(null);
  const [uploadProgress2, setuploadProgress2] = useState(null);
  const [file, setfile] = useState(null);

  const fetchCats = async () => {
    const cats = await axios.get('https://videos-backends.herokuapp.com/categories/video');
    setcategories(cats.data);
  };

  React.useEffect(() => {
    fetchCats();
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', title)
    fd.append('description', desc)
    fd.append('shortDescription', shortDesc)
    fd.append('director', direct)
    fd.append('category', category)
    fd.append('id', props.user._id)
    fd.append('video', file, file.name)

  const ress = await axios.post('https://videos-backends.herokuapp.com/videos', fd, {
    onUploadProgress: progressEvent => {
      setuploadProgress2('Uploading File ' + Math.round( progressEvent.loaded / progressEvent.total * 100) + '%')
    }
  })
    setuploadProgress2(ress.data.message)
  }

  return (
    <div>
        <Navbar user={props.user}/>
            <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999}}>
              { uploadProgress2 && <Alert severity="info">{uploadProgress2}</Alert>}
            </div>
            <Typography variant="h3" component="div" gutterBottom>
                Add Movies
            </Typography>
            <Toolbar/>
            <form onSubmit={submitHandler}>
            <TextField required onChange={(e) => settitle(e.target.value)} id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
            <TextField required onChange={(e) => setdirect(e.target.value)} id="filled-basic" label="Director" variant="filled" /> <br/> <br/> 
            <TextField required onChange={(e) => setshortDesc(e.target.value)} id="filled-basic" multiline fullWidth rows={2} label="Short Descrption" variant="filled" /> <br/> <br/> 
            <TextField required onChange={(e) => setdesc(e.target.value)} id="filled-basic" multiline fullWidth rows={4} label="Descrption" variant="filled" /> <br/> <br/> 
            <InputLabel required id="demo-simple-select-label">Select Category</InputLabel>
            <Select required onChange={(e) => setcategory(e.target.value)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
            >
          {
            categories &&
            categories.map(cat => <MenuItem key={cat._id} value={cat.name}>{cat.name}</MenuItem>)
          }
        </Select> <br/> <br/>
        <input accept="video/*" type="file" required onChange={(e) => setfile(e.target.files[0])}/> <br/> <br/>
        <Divider/>
        <br/>
        <Button type="submit" variant="contained" fullWidth>Submit Video</Button>
        </form>
        <Footer/>
    </div>
  )
}

export default UploadVideos