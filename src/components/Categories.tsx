import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const categories = [
  {
    title: "Women's Style",
    description: 'Up to 70% Off',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Handbag',
    description: '25% OFF',
    image: 'https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Watch',
    description: '45% OFF',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Footwear',
    description: '35% OFF',
    image: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Winter Wear",
    description: 'Up to 70% Off',
    image: 'https://images.unsplash.com/photo-1635062562403-117becb17d3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Traditionals",
    description: 'Up to 40% Off',
    image: 'https://media.istockphoto.com/id/1772651490/photo/parents-with-kalasha-pot-and-plate-looking-at-son-running-inside-house.jpg?s=2048x2048&w=is&k=20&c=Zs3fnilDtQKU8sB4wN6QekGGVK7cj3dVv50zu23AW2U=',
  },
  {
    title: "Spice Up Your Date",
    description: 'Up to 20% Off',
    image: 'https://images.unsplash.com/photo-1632262049811-86d23941618b?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Adventures",
    description: 'Up to 20% Off',
    image: 'https://plus.unsplash.com/premium_photo-1726783389453-dfc2e9459afa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Gym & Fitness",
    description: 'Up to 10% Off',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Bikers",
    description: 'Up to 19% Off',
    image: 'https://images.unsplash.com/photo-1738494777668-86c7620256cb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "Bracelets",
    description: 'Up to 20% Off',
    image: 'https://images.unsplash.com/photo-1597006354775-2955b15ec026?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Categories = () => {
  const handleCategoryClick = (category: string) => {
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ py: 6, background: 'linear-gradient(to right, #ffffff, #b0b0b0, #000000)' }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'purple',
            textTransform: 'uppercase',
            letterSpacing: 2,
            animation: 'fadeIn 1s ease-in-out, slideIn 1s ease-in-out',
          }}
        >
          Explore Our Categories
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: 'black',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
            animation: 'fadeIn 1.5s ease-in-out, slideIn 1.5s ease-in-out',
          }}
        >
          Discover the best deals and latest trends in our wide range of categories. Whether you're looking for fashion, accessories, or fitness gear, we have something for everyone.
        </Typography>
        <style>
          {`
            @keyframes fadeIn {
              from {
          opacity: 0;
              }
              to {
          opacity: 1;
              }
            }
            @keyframes slideIn {
              from {
          transform: translateY(-20px);
              }
              to {
          transform: translateY(0);
              }
            }
            @keyframes zoomIn {
              from {
          transform: scale(0.8);
          opacity: 0;
              }
              to {
          transform: scale(1);
          opacity: 1;
              }
            }
            @keyframes rotateIn {
              from {
          transform: rotate(-180deg);
          opacity: 0;
              }
              to {
          transform: rotate(0deg);
          opacity: 1;
              }
            }
          `}
        </style>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={index === 0 ? 6 : 3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  height: index === 0 ? 600 : 290,
                  overflow: 'hidden',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
                onClick={() => handleCategoryClick(category.title)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {category.description}
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories