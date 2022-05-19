import { Button, Divider, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React,{useState} from 'react'
import ResponsiveDrawer from './Sidebar'

function Addcats() {

    const [namev, setnamev] = useState(null);
    const [namem, setnamem] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            name: namev,
            type: "video"
        };
        const add = await axios.post('http://videos-backends.herokuapp.com/categories', data);
        try {
            alert('Category Added');
        } catch (error) {
            console.log(error);
        }
    };

    
    const submitHandler2 = async (e) => {
        e.preventDefault();
        const data = {
            name: namem,
            type: "magazine"
        };
        const add = await axios.post('http://videos-backends.herokuapp.com/categories', data);
        try {
            alert('Category Added');
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <ResponsiveDrawer className='body'>
        <Typography variant="h4" component="div" gutterBottom>
            Add Video Category
        </Typography>
        <br/><br/>
        <form style={{display:'flex'}} onSubmit={submitHandler}>
            <TextField style={{marginRight:20}} required onChange={(e) => setnamev(e.target.value)} id="filled-basic" label="Enter Category Name" variant="filled" /> <Button variant="contained" type="submit">Add</Button>
        </form>
        <br/><br/>
        <Divider/>
        <Typography variant="h4" component="div" gutterBottom>
            Add Magazine Category
        </Typography>
        <br/><br/>
        <form style={{display:'flex'}} onSubmit={submitHandler2}>
            <TextField style={{marginRight:20}} required onChange={(e) => setnamem(e.target.value)} id="filled-basic" label="Enter Category Name" variant="filled" /> <Button variant="contained" type="submit">Add</Button>
        </form>
    </ResponsiveDrawer>
  )
}

export default Addcats