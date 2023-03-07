import { Button, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryList(props) {

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
        <div>
            <Grid container maxWidth='sm' sx={{backgroundColor:'white',display:{xs:'sm'}}} spacing={1}>
                {
                    ListItems.map((item)=>( <Grid item md={4} >
                        <NavLink to={item} state={{cateName:{item}}}>
                           <Button> {item}</Button>
                            </NavLink>
                    </Grid>))
                }
                <Grid item >
                    <NavLink></NavLink>
                </Grid>
            </Grid>
        </div>
    );
}

export default CategoryList;