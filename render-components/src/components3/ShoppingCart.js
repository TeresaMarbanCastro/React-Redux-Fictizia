import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import InputProduct from './InputProduct';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // products : ['
        }
        this.addProduct = this.addProduct.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    products = [
        {
            name: 'violín',
            price: 888
        },
        {
            name: 'zumo',
            price: 1
        }
    ]

    addProduct(e) {
        this.setState({
            products: [...this.state.products]}, () => {
            console.log(this.state.products)
        });
    }
    handleInputChange() {
        this.setState({

        })
    }

    render() {
        return (
            <>
            <AddProduct onClick={this.addProduct}/>
            <ProductList 
                addProduct={this.addProduct}
                products={this.products}
            />
            </>
        )
    }
}

export default ShoppingCart