import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Container,Grid } from '@mui/material';
import { useNavigate } from 'react-router';

function SearchPage(props) {

     const[products,setproducts]=useState([])
    const search = useSelector((state)=>state.search.value)
    console.log(search.products)
    // setproducts(search.products)

    const navigate = useNavigate()
    useEffect(()=>setproducts(search.products),[products])
    return (
    
        <>
    
      <Container>
<Grid container spacing={2}>
{
   products?products.map((p)=>(
   <Grid item md={3} xs={12} container justifyContent='center' key={p.id} > <ProductCard item={p} key={p.id}/></Grid>
    ))
   :navigate('/')
}
</Grid>
</Container>
            
        </>
    );
}

export default SearchPage;