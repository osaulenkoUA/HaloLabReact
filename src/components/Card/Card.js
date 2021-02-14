import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import s from './Card.module.css';
import ShopBag from '../assets/ShopBag/ShopBag.js';

const Card = ({ id }) => {
  const products = useSelector(state => state.product);
  const item = products.find(el => el._id === id);

  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onFocusLost = () => setFocus(false);

  return (
    <li className={s.itemCard}>
      <div className={s.wrapNameCategory}>
        <p className={s.itemCard__category}>{item.category}</p>
        <p className={s.itemCard__name}>{item.name}</p>
      </div>

      <div className={s.wrapPriceAndBuy}>
        <div className={s.wrapPrice}>
          <span className={s.iconCurrency}>$</span>
          <span className={s.price}>{item.price}</span>
        </div>
        <div
          onMouseEnter={onFocus}
          onMouseLeave={onFocusLost}
          className={s.circleForShop}
        >
          <ShopBag focus={focus} />
        </div>
      </div>
    </li>
  );
};

export default Card;
