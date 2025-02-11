import { Product } from '../types';
import styled from 'styled-components';
export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
`;

export const ProductCard = styled.div`
  background: blue;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 300px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
`;

export const ProductCategory = styled.p`
  font-size: 1em;
  color: #555;
  margin: 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProductButton = styled.button`
  background: #e91e63;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #d81b60;
  }
`;

export const ProductDetails = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ProductName = styled.h2`
  font-size: 1.6em;
  margin: 10px 0;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 1.4em;
  color: #e91e63;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 1em;
  color: #777;
  margin: 10px 0;
`;

export const ProductDiscount = styled.span`
  background: #ff6347;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
  position: absolute;
  top: 10px;
  right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Shirt',
    price: 1449.99,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    description: 'Essential white shirt for any wardrobe',
    discount: 20,
  },
  {
    id: '2',
    name: 'Leather Handbag',
    price: 3296.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    description: 'Premium leather handbag',
    discount: 25,
  },
  {
    id: '3',
    name: 'Minimalist Watch',
    price: 7000.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    description: 'Elegant minimalist timepiece',
    discount: 45,
  },
  {
    id: '4',
    name: 'Summer Dress',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    description: 'Light and comfortable summer dress',
    discount: 30,
  },
  {
    id: '5',
    name: 'leather jacket',
    price: 9190.99,
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'men',
    description: 'usually used for terrain weather while with  riding your bike',
    discount: 30,
  },
  {
    id: '6',
    name: 'Red velvet dress',
    price: 5990.99,
    image: 'https://images.unsplash.com/photo-1510807703253-48f7ecb868e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'women',
    description: 'go with your loved one and grab a wine with this beautiful red dress',
    discount: 30,
  },
  {
    id: '7',
    name: 'Nike white sneakers',
    price: 15000.99,
    image: 'https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'men',
    description: 'wear it and just do it',
    discount: 30,
  },
  {
    id: '8',
    name: 'mounatain hike jacket',
    price: 19009.99,
    image: 'https://images.unsplash.com/photo-1649768722562-c4d276b82dcb?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'men',
    description: 'Use it while climbing in the mountains in between abode of clouds',
    discount: 30,
  },
  {
    id: '9',
    name: 'White half sleeves-pants',
    price: 699.99,
    image: 'https://plus.unsplash.com/premium_photo-1661963076937-05224b778d98?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'women',
    description: 'go and hit the gym and lift something heavier than your collegues',
    discount: 30,
  },
  {
    id: '10',
    name: 'black dress',
    price: 4000.99,
    image: 'https://plus.unsplash.com/premium_photo-1673964714570-0df7b0afcd98?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'women',
    description: 'Spice up your date',
    discount: 30,
  },
];