import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';
import { Box } from '@mui/system';
function CartPage(props) {
  const[cart,setcart]=useState([])
    const products = useSelector((state)=>state.cart.value)
   


  
 
  products.map((item)=>{
        const id= item.id
        console.log(item.id)
    fetch(`https://dummyjson.com/carts/user/${5}`)
    .then(res => res.json())
    .then((res)=>console.log(res))
    .then((res)=> setcart(res.carts[0].products))
  

   

  })



 
    return (
        <div>
            {/* {product.id} */}
           

           

  {
  cart.map((item,index)=>     
<CartCard item={item} /> )
}
            
        </div>
    );
}

export default CartPage;