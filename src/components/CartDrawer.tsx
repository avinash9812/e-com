import React from 'react';
import { Box, Typography, IconButton, Button, Divider } from '@mui/material';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onClose }) => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <Box sx={{ width: 320, p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Shopping Cart</Typography>
        <IconButton onClick={onClose}>
          <X size={20} />
        </IconButton>
      </Box>

      <Divider />

      <Box sx={{ flex: 1, overflow: 'auto', my: 2 }}>
        {state.items.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
            Your cart is empty
          </Typography>
        ) : (
          state.items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 2,
                p: 1,
                borderRadius: 1,
                bgcolor: 'grey.50',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price.toFixed(2)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus size={16} />
                  </IconButton>
                  <Typography variant="body2">{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </IconButton>
                </Box>
              </Box>
              <IconButton
                size="small"
                color="error"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 size={16} />
              </IconButton>
            </Box>
          ))
        )}
      </Box>

      {state.items.length > 0 && (
        <>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1">Total:</Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                ${state.total.toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartDrawer;