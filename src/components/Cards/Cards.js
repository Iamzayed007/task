import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('/db.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data)})
    },[])
    // const [products]=props.products
    return (
        <div className="grid md:grid-col-4 gap-3">
            {/* <h1>ha</h1> */}
            {/* <div className="flex flex-col mt-3 "> */}
           {
            products.map((product)=> {<Card key={product.id} product={product}></Card>})
           }
          
        {/* </div> */}
        </div>
    );
};

export default Cards;