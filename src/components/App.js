import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import productsOperation from '../redux/products/productsOperation.js';
import Section from './Section/Section.js';
import Products from './Products/Products.js'

import './App.module.css';
import './normalize.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperation.getProduct());
  }, []);
  
  
  
  
  return (
    <Section>
      <Products/>
    </Section>
  );
}

export default App;
