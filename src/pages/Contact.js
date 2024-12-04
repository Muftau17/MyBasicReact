import React from 'react'
import  Call  from '@mui/icons-material/Call';
import Mail from '@mui/icons-material/Mail'
import SupportAgentIcon  from '@mui/icons-material/SupportAgent';
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{ my:5, ml: 10, "& h4":{ fontWeight:'bold', mb: 2 } }} >
          <Typography variant='h4'>
            Contact My Resturant
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptate tempora quasi dignissimos ipsa ratione dicta unde 
            consequuntur sapiente aliquam, libero consequatur cum porro 
            sit blanditiis, ab laudantium corrupti, fuga quas!
          </p>
        </Box>
        <Box sx={{ m:2, width: "600px", ml: 10, "@media (max-width:600px)": {
          width: "300px",
        } }} >
          <TableContainer component={Paper}>
            <Table aria-label='contact table' >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>Contact Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <SupportAgentIcon sx={{color:'red', pt:1 }} /> 1800-00-0000 
                      (toroll free)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <Mail sx={{color:'skyblue', pt:1 }} /> muftaudeen@help.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                      <Call sx={{color:'green', pt:1 }} /> 09051032781
                    </TableCell>
                  </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact;