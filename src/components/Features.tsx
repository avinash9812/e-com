import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Truck, Shield, RefreshCw, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Truck size={32} />,
    title: 'Free Shipping',
    description: 'On All Orders Over $99',
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure Payment',
    description: 'We ensure secure payment',
  },
  {
    icon: <RefreshCw size={32} />,
    title: '100% Money Back',
    description: '30 Days Return Policy',
  },
  {
    icon: <HeadphonesIcon size={32} />,
    title: 'Online Support',
    description: '24/7 Dedicated Support',
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 6, background: '#fff' }}>
      <Container>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box sx={{ color: 'primary.main' }}>{feature.icon}</Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;