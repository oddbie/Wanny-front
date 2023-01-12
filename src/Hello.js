import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Hello = () => {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios
      .get('/api/hello')
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, [hello]);

  return (
    <div className='Hello'>
      <h1>This is Hello</h1>
      Learn React
      <div> from backend : {hello}</div>
    </div>
  );
};

export default Hello;
