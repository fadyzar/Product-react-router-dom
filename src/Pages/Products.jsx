

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import storeData from '../store';  

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get(storeData);
          setData(storeData);
        
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
    }
    fetchData()
},[])

  return (
    <div className='Products-page page'>
      <h1>Products</h1>
      {data.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
