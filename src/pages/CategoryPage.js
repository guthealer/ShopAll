import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductCard from '../components/ProductCard';



function CategoryPage(props) {


 

    let{state}=useLocation();
  
console.log(state.cateName.item)



// {

//     "id": 1,
// "title": "iPhone 9",
// "description": "An apple mobile which is nothing like apple",
// "price": 549,
// "discountPercentage": 12.96,
// "rating": 4.69,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",
// "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// "images": [
// "https://i.dummyjson.com/data/products/1/1.jpg",
// "https://i.dummyjson.com/data/products/1/2.jpg",
// "https://i.dummyjson.com/data/products/1/3.jpg",
// "https://i.dummyjson.com/data/products/1/4.jpg",
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// ]
// }
const[allproducts,setproducts]=useState([])
const[title,settitle]=useState()
const[description,setdescription]=useState()
const[price,setprice]=useState();
const[thumbnail,setthumbnail]=useState()










 


    function fetchData({state}){
                                                                       
   
    fetch(`https://dummyjson.com/products/category/${state.cateName.item}`)
.then(res => res.json())
.then((res)=>{setproducts(res.products)
console.log(res.products)});


}

useEffect(()=>
    fetchData({state}),[state.cateName.item])





console.log(allproducts)




    return (
        <div>
hhh
<Container>
<Grid container spacing={2}>
{
    allproducts.map((item)=>(
   <Grid item md={3} xs={12} container justifyContent='center'> <ProductCard item={item}/></Grid>
    ))
   
}
</Grid>
</Container>
        </div>
    );
}

export default CategoryPage;