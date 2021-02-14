import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';

import s from './Products.module.css';

const ProductItem = () => {
  const products = useSelector(state => state.product);
  return (
    <div className={s.cardsWrapper}>
      <ul className={s.list}>
        {products.map(el => {
          return <Card key={el._id} id={el._id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductItem;
