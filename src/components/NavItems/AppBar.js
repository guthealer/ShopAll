import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge, Switch } from '@mui/material';
import { MaterialUISwitch } from './DarkModeSwitch';
import DropDownList from './DropDownList';
import {TextField} from '@mui/material';
import { indigo } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { SearchOutlined, ShoppingBag, ShoppingCart, ShoppingCartOutlined, ShoppingCartTwoTone } from '@mui/icons-material';

import { useSelector } from 'react-redux';
import ToolTip from './ToolTip';
import { searchItem } from '../../features/search/SearchSlice';
import { useDispatch } from 'react-redux';




const ind = indigo[500];
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const[input,setinput]=useState('phone')

  
const products = useSelector((state)=>state.cart.value)

const dispatch = useDispatch()
const navigate = useNavigate()


function submit(input){
  fetch(`https://dummyjson.com/products/search?q=${input}`)
.then(res => res.json())

.then((res)=>{dispatch(searchItem(res))
            navigate('/SearchPage')})



}







const cartCount=products.length

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      ShopAll
      </Typography>
      <Divider />
      <List>
      
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
              <NavLink to='/' >
              <Button sx={{ color: '' }}>
                Home
              </Button>
              </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>


          
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
            
              <NavLink to='Entertainment' >
                
         
          
              </NavLink>

              </ListItemText>
            </ListItemButton>
          </ListItem>


          
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
             
              <NavLink to='Health' >
              <Button sx={{ color: '' }}>
       
              </Button>
              </NavLink>

              </ListItemText>
            </ListItemButton>
          </ListItem>


          
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
             
              <NavLink to='/CategoryList' >
              <Button sx={{ color: '' }}>
             category
              </Button>
              </NavLink>

              </ListItemText>
            </ListItemButton>
          </ListItem>


          
        
         

          


          
    
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar component="nav">
      
        <Toolbar sx={{display:'flex',justifyContent:'space-around'}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ShopAll
          </Typography>

           
        

          
     
          <Box sx={{ display: { xs: 'none', sm: 'flex',alignItems:'center',flexGrow:1 } }}>
           
              <NavLink to='/' >
              <Button sx={{ color: '#fff' }}>
                Home
              </Button>
              </NavLink>

              <ToolTip/>
            
              <Box sx={{border:'1px solid white',display:{sm:'block'}}}>
             <input type="text" name="" value={input} onChange={(e)=>setinput(e.target.value)} style={{padding:'10px',backgroundColor:"",borderRadius:'0px'}}/>
             <Button type="" onClick={()=>submit(input)} variant=''>
              
           <SearchIcon/>
             </Button>
             </Box>
            
             
           <Button>
             {props.username? <DropDownList user={props.username} /> : <NavLink to='Signin'>
              <Button variant='contained'>Signin</Button></NavLink>}
             
            </Button>
          
          </Box>

          

          
          <Box sx={{border:'1px solid white',display:{md:'none',sm:'flex',xs:'flex'},justifyContent:'center',flexWrap:'nowrap',width:'100%'}}>
             <input type="text" name="" value={input} onChange={(e)=>setinput(e.target.value)} style={{padding:'10px',backgroundColor:"",borderRadius:'0px',width:'70%',flexShrink:1}}/>
             <Button type="" onClick={()=>submit(input)} variant=''>
              
           <SearchIcon/>
             </Button>
             </Box>



       
         <NavLink to='CartPage'  >
          <Badge badgeContent={cartCount} showZero color='success' >
       <ShoppingCartTwoTone sx={{color:'white',margin:'5px',fontSize:'2rem'}}/>
         </Badge>
         </NavLink>

        <MaterialUISwitch  checked={props.theme}
                    color='success'
                    onChange={props.handleChange}/>


        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;