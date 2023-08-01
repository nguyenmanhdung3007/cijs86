import React, { useState } from 'react';
import "./Mapping.css";

const products = [
    {
        name: 'Product 1',
        price: '$10',
        description: 'Máy ảnh'
    },
    {
        name: 'Product 2',
        price: '$20',
        description: 'Tàu'
    },
    {
        name: 'Product 3',
        price: '$30',
        description: 'xe'
    },
    {
        name: 'Product 4',
        price: '$40',
        description: 'cơm'
    }]

const Mapping = () => {
    const [search, setSearch] = useState("");
    const fiteredProduct = products.filter((item) => item.name.toLowerCase().includes(search));
    console.log(fiteredProduct);
    return (
        <>
            <input type='text' 
            placeholder='Search' 
            className='search' 
            onChange={(event) => setSearch(event.target.value) }></input>
            {fiteredProduct.length !== 0 ? 
            fiteredProduct.map((item) => {
                return (
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                )
            }) :  <p>Not found</p>}  
        </>
    );
};

export default Mapping;