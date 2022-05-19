import { Alert, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar'

function Register() {

    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [pass, setpass] = useState(null);
    const [error, seterror] = useState(null);
    const [respo, setrespo] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            username: name,
            email: email,
            password: pass,
            role: "user"
        };
        try {
            const user = await axios.post('https://videos-backends.herokuapp.com/register', data);
            setrespo(user.data.message);
        } catch (error) {
            seterror(error.response.data);
        }
    };


  return (
    <div>
        <Navbar/>
            <form onSubmit={submitHandler} style={{backgroundColor:'white',height:'100vh',color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                {error && <Alert severity="error">{error}</Alert>} <br />
                {respo && <Alert severity="info">{respo}</Alert>} <br />
                <TextField onChange={(e) => setname(e.target.value)} required id="filled-basic" label="Enter Username" variant="filled"/> <br />
                <TextField onChange={(e) => setemail(e.target.value)} required id="filled-basic" label="Enter Email" variant="filled"/> <br />
                <TextField onChange={(e) => setpass(e.target.value)} required id="filled-basic" label="Enter Password" variant="filled"/> <br />
                <Button type="submit" variant="contained">Sign Up</Button>
            </form>
        <Footer/>
    </div>
  )
}

export default Register