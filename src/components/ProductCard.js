import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



export default function ProductCard(props) {


  return (
    <Card sx={{ maxWidth:350 ,display:'flex'}} container>
          <NavLink to="/ProductPage" state={{product:props.item }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="250"
          width='100%'
          image={props.item.thumbnail}
          alt="green iguana"
          // sx={{objectFit:'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {props.item.description}
          </Typography>
        </CardContent>
    
         
        
 
      </CardActionArea>
      </NavLink>
    </Card>
  );
}