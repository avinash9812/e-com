import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Drawer, List, ListItem, ListItemText, TextField, useScrollTrigger, Slide } from '@mui/material';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface HeaderProps {
  title: string;
  menuItems: { label: string; id: string }[];
  searchPlaceholder?: string;
}

const Header: React.FC<HeaderProps> = ({ title, menuItems, searchPlaceholder = 'Search...' }) => {
  const { state: cartState } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleNavigation = (section: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="transparent" elevation={1} sx={{ 
          bgcolor: 'white',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            bgcolor: 'white'
          }
        }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              sx={{ display: { md: 'none' } }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu />
            </IconButton>

            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
              fontFamily: 'Pacifico, cursive',
              cursor: 'pointer',
              position: 'relative',
              color: 'secondary.main',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '3px',
                bottom: -4,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'secondary.main',
                transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                width: '100%',
                },
                '&:hover': {
                color: 'primary.main',
                transition: 'color 0.3s ease',
                },
              }}
              >
              {title}
              </Typography>
              <IconButton 
              className="custom-icon"
              sx={{
                marginLeft: 1,
                transition: 'transform 0.5s ease',
                '&:hover': {
                transform: 'rotate(360deg)',
                },
              }}
              >
              <Menu />
            </IconButton>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {menuItems.map((item) => (
                <Button 
                  key={item.label} 
                  color="inherit"
                  onClick={() => handleNavigation(item.id)}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box 
                sx={{ 
                  display: { xs: 'none', sm: 'block' },
                  position: 'relative',
                  transition: 'width 0.3s ease',
                  width: isSearchFocused ? '300px' : '200px',
                }}
              >
                <TextField
                  size="small"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  sx={{ 
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        '& > fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    },
                  }}
                />
              </Box>
              <IconButton 
                color="inherit"
                sx={{
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <User size={20} />
              </IconButton>
                <IconButton 
                  color="inherit"
                  sx={{ 
                  display: { sm: 'none' },
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  }}
                  onClick={() => setIsSearchFocused((prev) => !prev)}
                >
                  <Search size={20} />
                </IconButton>
                {isSearchFocused && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: '100%', 
                      left: 0, 
                      right: 0, 
                      bgcolor: 'background.paper', 
                      p: 1, 
                      zIndex: 1 
                    }}
                  >
                    <TextField
                      size="small"
                      placeholder={searchPlaceholder}
                      value={searchQuery}
                      onChange={handleSearch}
                      onBlur={() => setIsSearchFocused(false)}
                      autoFocus
                      sx={{ 
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            '& > fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                )}
                <IconButton 
                color="inherit"
                onClick={() => setIsCartOpen(true)}
                sx={{
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                  transform: 'scale(1.1)',
                  },
                }}
                >
                <Badge 
                  badgeContent={cartState.items.length} 
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      animation: cartState.items.length ? 'bounce 0.5s ease' : 'none',
                      '@keyframes bounce': {
                        '0%, 100%': {
                          transform: 'scale(1)',
                        },
                        '50%': {
                          transform: 'scale(1.2)',
                        },
                      },
                    },
                  }}
                >
                  <ShoppingCart size={20} />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <CartDrawer onClose={() => setIsCartOpen(false)} />
      </Drawer>

      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              component="button"
              onClick={() => handleNavigation(item.id)}
              sx={{
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Toolbar /> {/* Add spacing below fixed navbar */}
    </>
  );
};

export default Header;
