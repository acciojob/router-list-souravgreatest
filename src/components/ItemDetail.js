import React from 'react';
import { useParams } from 'react-router-dom';
const items = [
    { id: '1', name: 'Item 1', desc: 'Description for Item 1' },
    { id: '2', name: 'Item 2', desc: 'Description for Item 2' },
    { id: '3', name: 'Item 3', desc: 'Description for Item 3' },
  ];
const ItemDetail = () => {
    const {id}=useParams();
    const item=items.filter(ele=>ele.id===id);
    console.log(item);
  return (
    <div>
      <h1>{item[0].name}</h1>
      <p>{item[0].desc}</p>
    </div>
  );
}

export default ItemDetail;
