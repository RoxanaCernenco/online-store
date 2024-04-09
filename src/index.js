import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './content/ProductContent';
import SideBarProvider from './content/SideBarContent';
import CartProvider from './content/CartContent';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SideBarProvider>
    <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SideBarProvider>
);
