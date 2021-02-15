import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconClose from '../assets/IconShopBag/IconClose/IconClose';
import s from './OrderForm.module.css';
import productsActions from '../../redux/products/productsActions.js';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [validateName, setValidateName] = useState(true);
  const [validateNumber, setValidateNumber] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  const idItem = useSelector(state => state.currentOrderId);
  const item = products.find(el => el._id === idItem);

  const onHandleClick = () => dispatch(productsActions.showModal(false));

  const updateName = ({ target }) => setName(target.value);
  const updateNumber = ({ target }) => setNumber(target.value);

  const onHandleBlur = e => {
    console.log(e.target.name);
    if (e.target.name === 'name') {
      const isValid = /^(?:[A-Za-z]+)$/.test(name);
      setValidateName(isValid);
    }
    if (e.target.name === 'phoneNumber') {
      const isValid = /^\d+$/.test(number);
      const isValidLength = e.target.value.length === 12;
      const validIs = isValid || isValidLength;
      console.log(validIs);
      setValidateNumber(validIs);
    }
  };

  const onHandleFocus = ({ target }) => {
    if (!validateName && target.name === 'name') {
      setName('');
      setValidateName(true);
    }
    if (!validateNumber && target.name === 'phoneNumber') {
      setNumber('');
      setValidateNumber(true);
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    // console.log(!!name);
    if (!name) setValidateName(false);
    if (!number) setValidateNumber(false);
    if (validateNumber && validateName && name && number) {
      const order = {
        name,
        number,
        nameItem: item.name,
        category: item.category,
        price: item.price,
      };
      console.log(order);
    }
  };

  return (
    <div className={s.orderWrapper}>
      <div className={s.iconClose} onClick={onHandleClick}>
        <IconClose />
      </div>
      <div className={s.wrapNameCategory}>
        <p className={s.itemCard__category}>{item.category}</p>
        <p className={s.itemCard__name}>{item.name}</p>
      </div>
      <div className={s.wrapPrice}>
        <span className={s.iconCurrency}>$</span>
        <span className={s.price}>{item.price}</span>
      </div>

      <form onSubmit={onHandleSubmit} className={s.form}>
        <input
          className={s.form__input}
          type="text"
          value={name}
          placeholder="Name"
          onChange={updateName}
          name="name"
          onBlur={onHandleBlur}
          onFocus={onHandleFocus}
          style={
            validateName
              ? { border: '1px solid rgba(0,0,0,0.2)' }
              : { border: '1px solid red' }
          }
        />
        {!validateName && <p className={s.errorInput}>Error</p>}
        <input
          className={s.form__input}
          type="text"
          value={number}
          onChange={updateNumber}
          name="phoneNumber"
          placeholder="Number"
          onBlur={onHandleBlur}
          onFocus={onHandleFocus}
          style={
            validateNumber
              ? { border: '1px solid rgba(0,0,0,0.2)' }
              : { border: '1px solid red' }
          }
        />
        {!validateNumber && <p className={s.errorInputNumb}>Error</p>}
        <button type="submit" className={s.form__btn}>
          ORDER
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
