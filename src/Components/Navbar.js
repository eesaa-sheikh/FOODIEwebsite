import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import {BsCart2} from 'react-icons/bs'
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { PhoneRounded } from '@mui/icons-material';
import Dishes from './Dishes';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Navbar = () => {




    const [openMenu, setOpenMenu] = useState(false);

    // This is an array basically of key values with text and associated icons
    const menuOptions = [

        {
            text: "Home",
            icon: <HomeIcon/>,
        },

        
        {
            text: "About",
            icon: <InfoIcon/>
        },
        
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon/>
        },
        
        {
            text: "Contact",
            icon: <PhoneRoundedIcon/>
        },
        
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon/>
        },

        {
            copyright: "©FOOD LTD"
        }

    ];

  return (
    <nav>
    <div className = 'nav-logo-container'>
        <img src={Logo}/>

    </div>  

    <div className = 'nav-links-container'>
        <Link to='/' onClick={() => console.log("Home Button Pressed")}>Home</Link>
        <Link to='/Dishes' onClick={() => console.log("Dishes Button Pressed")}> Dishes</Link>
    <Link to={'About'}onClick={() => console.log("About Button Pressed")}>About</Link>
        <Link to='/Testimonial'onClick={() => console.log("Testimonials Button Pressed")}>Testimonials</Link>
        <Link to='/Contact'onClick={() => console.log("Contact Button Pressed")}>Contact</Link>
        <Link to ='/Cart'onClick={() => console.log("Cart Icon Pressed")}><BsCart2 className='navbar-cart-icon'/></Link>    
        <button className='primary-button'>Booking Now</button>
    </div>  
    <div className = "navbar-menu-con">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor='right'>

      <Box sx={{width:250}}
      role = "presentation"
      onClick ={()=> setOpenMenu(false)}
      onKeyDown ={()=> setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((item) =>(
          <ListItem className='text' key = {item.text} disablePadding >
            <ListItemButton className='test'>
                <ListItemIcon className='icon'>
                {item.icon}
                </ListItemIcon>
                <ListItemText primary ={item.text} />
            </ListItemButton>
          </ListItem>
          ))}  
        </List>
       
        
        </Box> 
            {menuOptions.map((item) =>(
         
                <p className='copyright'>{item.copyright}</p>
            ))}  
    </Drawer>
    </nav>
  )
}

export default Navbar
