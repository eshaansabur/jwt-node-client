import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';

const OrderList = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orderList, setOrderList] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/orderList`;
        fetch(url, {
        headers: {
            'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
        },
        })
        .then((response) => response.json())
        .then((data) => {
            setOrderList(data);
            //event.target.reset();
        });
    }, [user.email])
    return (
        <div className='container'>
            <h2>Order List</h2>
            <div className="row">
                {
                    orderList.map(order => <div className='col-4 mt-5 mb-5'>
                        <h2>Name: {order.name}</h2>
                        <h4>Price: {order.price}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OrderList;