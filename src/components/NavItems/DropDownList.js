import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';

export default function DropDownList(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const clearstorage=()=>{
    localStorage.clear()
  }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       variant='contained'
      
      >

        {<Avatar src={localStorage.getItem('image')} size='small' sx={{height:''}}></Avatar>}
        <ArrowDropDownIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
     
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
         <NavLink to='Profile'>Profile</NavLink> 
        </MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='Account'>Account</NavLink> </MenuItem>
        <MenuItem onClick={()=>{clearstorage();
                               window.location.reload()
                          handleClose()}}>
       Logout
        </MenuItem>
      </Menu>
    </div>
  );
}