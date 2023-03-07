import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Container } from '@mui/system';



export default function CartCard(props) {


  return (<div> 

  


   
        <NavLink to='ProductPage' state={{product:props.item }} >
    <Card sx={{ maxWidth:300}}>

      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          width='100%'
          image={props.item.thumbnail}
          alt="green iguana"
          // sx={{objectFit:'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
         {props.item.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </NavLink>
    <Button variant='outlined'>Buy Now</Button>
   
    


    

    
    
    </div>
  );
}