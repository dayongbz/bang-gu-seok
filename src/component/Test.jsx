import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dfsXyConv from './dfsXyConv';

export default function Test() {
  const [result, setResult] = useState('로딩중');
  useEffect(() => {
    axios.get('./test.json').then(data => {
      window.localStorage.setItem(
        'json',
        JSON.stringify(data.data.response.body.items.item),
      );
      console.log(data.data.response.body.items.item);
      setResult(data.data.response.body.items.item);
    });
    navigator.geolocation.getCurrentPosition(position => {
      console.log(
        dfsXyConv('toXY', position.coords.latitude, position.coords.longitude),
      );
    });
  }, []);
  return <div />;
}
