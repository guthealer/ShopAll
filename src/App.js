import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


import { Route, Routes } from 'react-router';


 import { ThemeProvider ,createTheme,Switch, CssBaseline} from '@mui/material';
import AppBar from './components/NavItems/AppBar';
import DropDownList from './components/NavItems/DropDownList';
import Home from './pages/Home';

import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Account from './pages/Account';
import ProductCard from './components/ProductCard';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import CategoryList from './components/CategoryList';




function App() {


  const [name, setName] = useState("phone");

    function getUserInfo(){
    
      username =localStorage.getItem('firstName')
        localStorage.getItem('lastName')
        localStorage.getItem('email')
        localStorage.getItem('image')
      
      
    }

  const username =localStorage.getItem('firstName')
        localStorage.getItem('lastName')
        localStorage.getItem('email')
        localStorage.getItem('image')

  
  
  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
      palette: {
          mode: theme ? 'dark' : 'light',
      },
  });
  const handleChange = (event) => {
      settheme(event.target.checked);
  }

  const ListItems=
  [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]
 

  return (

    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <AppBar  username={username} theme={theme} handleChange={handleChange}/>
      <br/>


 

        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='*'  element={<Home/>}/>
            <Route path='Signin'  element={<Signin/>}     />

            <Route path='Profile'  element={<Profile/>}     />
            <Route path='Account'  element={<Account/>}     />
            <Route path='ProductPage'  element={<ProductPage/>}     />
            <Route path='CartPage'  element={<CartPage/>}     />

            <Route path='SearchPage'  element={<SearchPage/>}     />
            {
              ListItems.map((item)=>(
                <Route path={item}  element={<CategoryPage/>} ></Route>
              ))
            }
             <Route path='CategoryList'  element={<CategoryList/>}     />
        </Routes>
    
       
 
       {/* <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='Entertainment' element={<Entertainment/>}/>
         <Route path='Health' element={<Health/>}/>
         <Route path='sport' element={<Sport/>}/>
         <Route path='Technology' element={<Technology/>}/>
         <Route path='Science' element={<Science/>}/>
         <Route path='General' element={<General/>}/>
      </Routes> */} 
 
   
    </div>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
