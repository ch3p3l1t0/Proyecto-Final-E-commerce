import React, { useEffect, useState } from 'react';
import api from '../api';
import './styles/Home.css';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products') // Solicita datos al backend
           .then((res) => setProducts(res.data))
           .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Productos Destacados</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
