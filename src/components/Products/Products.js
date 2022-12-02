import React, { useEffect } from 'react';
import {useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleOrder = (product) => {
        //console.log(product, user.email);
        const {name, price} = product;
        const email = user.email;
        fetch('http://localhost:5000/addOrder', {
        method: 'POST',
        body: JSON.stringify({
            name, price, email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            toast("Order Complete");
        });
    }
    return (
        <div className='container'>
            <h3>Products</h3>
            <ToastContainer></ToastContainer>
            <div className="row">
                {
                    products.map(product => <div className="col-4" key={product._id}>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Price: {product.price} taka</p>
                            <button onClick={() =>handleOrder(product)} className="btn btn-link">Order Now</button>
                        </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;