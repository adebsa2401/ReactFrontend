import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMessage from './feature/service/fetchMessage';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  const message = useSelector((state) => state.message);
  return <h1>{message.data.text}</h1>;
};

export default Greeting;
