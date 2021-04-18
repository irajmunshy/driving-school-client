import React, { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://morning-island-82484.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div className="p-4 me-5">
            <div className="orderList p-4">
                <div className="d-flex p-3 orderHeader">
                    <h6 className="one">Name</h6>
                    <h6 className="two">Email ID</h6>
                    <h6 className="three">Service</h6>
                    <h6 className="four">Pay With</h6>
                    <h6 className="five">Status</h6>
                </div>

                {
                    orders.map(order => <OrderList order={order}></OrderList>)
                }

            </div>
        </div>
    );
};

export default Orders;