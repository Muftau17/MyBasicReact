import React from 'react'
import  YouTubeIcon  from '@mui/icons-material/YouTube';
import  Facebook  from '@mui/icons-material/Facebook';
import TwitterIcon  from '@mui/icons-material/Twitter';
import  InstagramIcon  from '@mui/icons-material/Instagram';
import { Box, Typography } from '@mui/material';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor: '#1A1A19', color:'white', p: 3 }} >
        <Box sx={{my: 3, "& svg":{
            fontSize:"60px",
            cursor:'pointer',
            mr: 2,
        },
        "& svg:hover":{
            color: 'goldenrod',
            transform:'translateX(5px)',
            transition: 'all 400ms', 
        }
        }}>
            {/* icons */}
            <InstagramIcon/>
            <TwitterIcon/>
            <Facebook/>
            <YouTubeIcon/>
        </Box>
        <Typography variant='h5' sx={{
            "@media (max-width:600px)": {
            fontSize: "1rem",
        }}}>
            All Rights Reserved &copy; Muftaudeen
        </Typography>
    </Box>
    </>
  )
}

export default Footer