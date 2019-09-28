import React from 'react';
import Product from './Product';

// export default (props) => <ul>{props.children}</ul>

export default props =>
<div>
    {props.products.map((product) => (
        <div key={product}>
            <Product name={product} price={props.price} />
            <button onClick={() => props.addProduct(product)}>Añadir</button>
            </div>
    ))}
</div>