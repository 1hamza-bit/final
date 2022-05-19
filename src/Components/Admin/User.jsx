import { Paper, Typography , Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'

function User() {

    const [users, setusers] = useState(null);

    const fetchUsers = async () => {
        const ress = await axios.get('https://videos-backends.herokuapp.com/users');
        setusers(ress.data);
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        await axios.get('https://videos-backends.herokuapp.com/ud/' + id);
        setusers(users.filter(item => item._id !== id));
    };
    

  return (
    <div className='body'>
        <ResponsiveDrawer>
            {
                users &&
                <Paper elevation={3} style={{padding:20}}>
                    {users.map(user =>
                        <div key={user._id} style={{display:'flex',alignItems:'center',padding:8}}>
                            <Typography component="p" variant="h7">
                                {user.email}
                            </Typography>
                            <Typography color="text.secondary" style={{ flex: 1 , display: 'flex' , justifyContent:'center' }}>
                                {user.role}
                            </Typography>
                            <div>
                                <Button variant="contained" onClick={() => deleteUser(user._id)}>
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

export default User