import React from 'react';

const OrderList = ({order}) => {
    const {_id, name, email, title, status} = order;
    
    const handleStatusChange = (value, e) => {
        // const newStatus= e.target.value;
        console.log(value)
    }

    return (
        <div className="d-flex p-3 orderBody">
            <h6 className="one">{name}</h6>
            <h6 className="two">{email}</h6>
            <h6 className="three">{title}</h6>
            <h6 className="four">Credit Card</h6>
            <select className="statusMenu" name="stats" id="status">
                <option onClick={() => handleStatusChange('done')} value="done" className="done">Done</option> 
                <option onClick={() => handleStatusChange('pending')} value="Pending" className="pending">Pending</option> 
                <option onClick={() => handleStatusChange('onGoing')} value="OnGoing" className="onGoing">OnGoing</option>
            </select>
        </div>
    );
};

export default OrderList;