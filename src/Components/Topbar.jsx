import * as React from 'react';
import "./navbar.css";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {Box,Button,MenuItem,Menu} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '22ch',
      },
    },
  },
}));

export default function Topbar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (route) => {
    setAnchorEl(null);
    navigate(route)
  };

  let navigate = useNavigate();

  const [quer, setquer] = React.useState(null);

  const submithandler = (e) => {
    e.preventDefault();
    navigate(`/search/${quer}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
    
        <form onSubmit={submithandler}>
          <Search onChange={(e) => setquer(e.target.value)} style={{height:40,display:'flex',alignItems:'center'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase style={{fontSize:15}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </form>
          {
            props.user ?
            <div>
              <Button id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>{props.user.username} <ArrowDropDownIcon/></Button>
              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.user && props.user.role==="admin" ? <MenuItem onClick={() => handleClose("/admin")}>Admin</MenuItem> : ""}
        <MenuItem onClick={() => handleClose("/User_Upload_Video")}>Add Movies</MenuItem>
        <MenuItem onClick={() => handleClose("/User_Upload_Screenplay")}>Add Screenplays</MenuItem>
        <MenuItem onClick={() => handleClose("/User_Upload_Magazine")}>Add Magazines</MenuItem>
        <MenuItem onClick={() => handleClose("/User_Upload_Other")}>Add Others</MenuItem>
        <MenuItem onClick={() => handleClose("/logout")}>Logout</MenuItem>
      </Menu>
            </div>
            :
            <>
              <Button style={{margin: "1%"}} variant="contained" onClick={() => navigate('/login')}>
<PersonOutlineIcon/>  Login
</Button>
<Button style={{margin: "1%"}} variant="contained" onClick={() => navigate('/register')}>
<PersonAddIcon />  Register
</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}