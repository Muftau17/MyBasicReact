import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
       <Box 
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my:2,
            fontSize:"2rem"
          },
          "& p": {
            textAlign:"justify"
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4 ": {
              fontSize: "1.5rem"
            }
          }
        }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, accusamus voluptas.
          Aperiam sequi voluptate eligendi illo debitis modi, itaque iste voluptates ipsam repudiandae,
          qui quae consectetur. Incidunt aut odio consectetur architecto eum doloribus accusantium!
          Magnam nostrum a suscipit tempore sint nihil? Incidunt, architecto dolore dolorem reprehenderit
          magni ipsum eveniet impedit minima, tempora quis accusamus repellendus aspernatur adipisci 
          expedita provident iusto quisquam quibusdam, nisi laborum excepturi rem itaque accusantium 
          qui illum? Dolor quos dolorum aliquid ea quo. Optio sunt eum illum magnam? Fugit unde perferendis
          quibusdam maxime distinctio corrupti ut ducimus libero quam accusamus? Aspernatur exercitationem, 
          iure consectetur consequuntur est officia!
        </p>
        <br/>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, accusamus voluptas.
          Aperiam sequi voluptate eligendi illo debitis modi, itaque iste voluptates ipsam repudiandae,
          qui quae consectetur. Incidunt aut odio consectetur architecto eum doloribus accusantium!
          Magnam nostrum a suscipit tempore sint nihil? Incidunt, architecto dolore dolorem reprehenderit
          magni ipsum eveniet impedit minima, tempora quis accusamus repellendus aspernatur adipisci 
          expedita provident iusto quisquam quibusdam, nisi laborum excepturi rem itaque accusantium 
          qui illum? Dolor quos dolorum aliquid ea quo. Optio sunt eum illum magnam? Fugit unde perferendis
          quibusdam maxime distinctio corrupti ut ducimus libero quam accusamus? Aspernatur exercitationem, 
          iure consectetur consequuntur est officia!
        </p>
       </Box>
    </Layout>
  )
}

export default About;