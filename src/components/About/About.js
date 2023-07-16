import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Box id='about' sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh'
        }}
            points="0,100 50,00, 100,100" >
            <Container maxWidth="xl">
                <Typography sx={{ color: 'primary.main', mx: 2, p: 2, textAlign: "center" }}
                    variant='h4'>
                    Built using react.js
                </Typography>
            </Container>
        </Box>
    );
};

export default About;