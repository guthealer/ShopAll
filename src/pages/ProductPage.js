import { Container } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
 import { Box, Button, ButtonGroup, Grid, Typography} from '@mui/material';  
import { Stack } from 'react-bootstrap';
import { red } from '@mui/material/colors';
import styled from 'styled-components';
import { colors } from '@mui/material';
import { AspectRatio } from '@mui/icons-material';
import { useSelector,useDispatch } 
from 'react-redux';

import { makeStyles } from '@mui/material';

import { addItem } from '../features/Cart/CartSlice';
import CartPage from './CartPage';



function ProductPage(props) {
const dispatch=useDispatch()
const navigate = useNavigate()

const[imgIndex,setimgIndex]=useState(0);


   const ImageContainer = styled.div`
   display: flex;
   justify-content: center;
               width:100%;
               height:100%;
               background-color:aliceblue;
             
               img{
               height: 100%;
               width: 100%;
               object-fit: contain;
               }
   `;

  

    const {state}=useLocation()
    console.log(state.product)
    return (
        <div>
        <Container>

            <Grid container spacing={4}>
                <Grid item container md={6} xs={12} justifyContent={'center'}>
                  <Grid item md={12} sx={{height:{sm:'400px',xs:'300px'}}} minHeight='300px'>
                    <ImageContainer>
                    <img src={state.product.images[imgIndex]} alt="" width='100%'/></ImageContainer>
                  </Grid>




                  <Grid container item sx={{maxwidth:'500px'}} spacing={1} justifyItems='center'>
                  
                     <Grid item   md={3} xs={3} sx={{height:'100px'}}>
                      <ImageContainer>
                      <img src={state.product.images[0]} alt="" width='100%'  onClick={()=>setimgIndex(0)}        />
                      </ImageContainer>
                     </Grid>
                     <Grid item  md={3} xs={3} sx={{height:'100px'}}>
                     <ImageContainer>
                      <img src={state.product.images[1]} alt="" width='100%'  onClick={()=>setimgIndex(1)}        />
                      </ImageContainer>
                     </Grid>

                     <Grid item  md={3} xs={3} sx={{height:'100px'}}>
                     <ImageContainer>
                      <img src={state.product.images[2]} alt="" width='100%'  onClick={()=>setimgIndex(2)}        />
                      </ImageContainer>
                     </Grid>
                    
                     <Grid item  md={3} xs={3}   sx={{height:'100px'}}>
                     <ImageContainer>
                      <img src={state.product.images[3]} alt="" width='100%'  onClick={()=>setimgIndex(3)}        />
                      </ImageContainer>
                     </Grid>

                  
                     <Grid item container justifyContent={'center'} sx={{display:{md:'none'}}}>
                  <Button variant='contained' color='primary' sx={{margin:'10px'}} onClick={()=>{dispatch(addItem(state.product))}}>Add To Cart</Button>
                  <Button variant='contained' color='primary' sx={{margin:'10px'}}>Buy Now</Button>
                 
                  </Grid>
          
                  

                  </Grid>
                 
                </Grid>



                <Grid item  md={6} xs={12} bgcolor={'success'} container alignItems={'center'}>
                  <Grid item>
                  <Typography variant='h5'>  {state.product.title}</Typography>
                  <Typography variant='h5'>  {state.product.price}$</Typography>
                  <Typography variant='h6'>  {state.product.description}</Typography>
                  </Grid>
                    
                  <Grid item container justifyContent={'center'}   sx={{display:{xs:'none',md:'block'}}}>
                  <Button variant='contained' color='primary' sx={{margin:'10px'}} onClick={()=>{dispatch(addItem(state.product))}}>Add To Cart</Button>
                  <Button variant='contained' color='primary' sx={{margin:'10px'}}>Buy Now</Button>
                 
                  </Grid>
               
                </Grid>
            </Grid>
        </Container>


        </div>
    );
}

export default ProductPage;