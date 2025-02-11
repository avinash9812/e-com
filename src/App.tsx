import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ContactForm from './components/ContactForm';
import Footer from './Footer';
import { CartProvider } from './context/CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0066cc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title="E-bazaar" menuItems={[
          { label: 'Home', id: 'home' },
          { label: 'Shop', id: 'shop' },
          { label: 'Contact', id: 'contact' }
        ]} />
        <Hero />
        <Features />
        <Categories />
        <Container sx={{ py: 6 }}>
          <ProductGrid />
        </Container>
        <ContactForm />
        <div id="footer" style={{ backgroundColor: '#f8f8f8', padding: '2rem 0', marginTop: '2rem', animation: 'fadeIn 2s' }}>
          <Footer />
        </div>
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
          `}
        </style>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
