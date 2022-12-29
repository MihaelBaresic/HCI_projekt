import HeaderFooter2 from '../layouts/HeaderFooter2.js';
import { useState } from 'react';
import {ShoppingCartProvider} from '../components/ShoppingCartContext.js';
import Shop from '../components/shop.js';

const App = () => {

  return (
    <ShoppingCartProvider>
    <HeaderFooter2>
      <Shop />
    </HeaderFooter2>
    </ShoppingCartProvider>
  );
};

export default App;
