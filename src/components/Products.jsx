import { useEffect } from 'react';
import './Products.css'
import ProductsList from './ProductsList';
import { useState } from 'react';


function Products() {
    //fetch e JS, atunci il punem de partea de JS a componentei
    const [productsFromApi, setProductsFromApi] = useState({});
    

    useEffect(() => {
        const resultProducts = fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(json => console.log(json))
        console.log('products BE', resultProducts);
        setProductsFromApi(resultProducts);
    }, [])

    console.log('productsFromApi', productsFromApi);

    return (
        <div className="products">
            Products list below
            <ProductsList />
        </div>
    )
}

export default Products;