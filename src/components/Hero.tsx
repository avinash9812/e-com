import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  const handleShopNow = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReadMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <Box
      sx={{
      background: 'linear-gradient(135deg, #f5f5f5 30%, #e0f7fa 90%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
      },
      }}
    ><Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ maxWidth: '50%' }}>
            <Typography
              variant="h6"
              sx={{ 
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2, 
              fontStyle: 'italic' 
              }}
            >
              Season Sale
            </Typography>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              }}
            >
              MEN'S FASHION
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
              mb: 4,
              background: 'linear-gradient(45deg, #66BB6A 30%, #B2FF59 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              }}
            >
              Min. 35-70% Off
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{
                  backgroundColor: '#ff4081',
                  '&:hover': {
                  backgroundColor: '#f50057',
                  },
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                }}
                onClick={handleShopNow}
                >
                SHOP NOW
                </Button>
                <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                sx={{
                  borderColor: '#0066cc',
                  color: '#0066cc',
                  '&:hover': {
                  borderColor: '#004ba0',
                  color: '#004ba0',
                  },
                  fontWeight: 'bold',
                }}
                onClick={handleReadMore}
                >
                READ MORE
                </Button>
            </Box>
          </Box>
          <Box sx={{ maxWidth: '50%' }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1705170973201-7157f6dd5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fashion Model"
              style={{ maxWidth: '150%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero