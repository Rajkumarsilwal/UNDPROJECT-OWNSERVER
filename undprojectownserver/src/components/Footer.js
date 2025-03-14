import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import '../App.css'; 

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 2, // Default padding
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {/* Call-to-Action */}
          <Box>
            <Typography
              variant='body1' 
              align='center'
              sx={{
                fontSize: '1.2rem', 
                fontWeight: 'bold',
              }}
            >
              Share your thoughts and feedback:{" "}
              <Link
                href='https://und.edu/social-media'
                color='inherit'
                underline='hover'
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '&:hover': {
                    color: 'green', 
                  },
                }}
              >
                und.edu/social-media
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
