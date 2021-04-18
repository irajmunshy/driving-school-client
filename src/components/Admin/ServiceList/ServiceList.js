import React from 'react';

const ServiceList = ({service}) => {
    const {_id, title, price} = service;

    const handleDelete = (id) => {
        fetch(`https://morning-island-82484.herokuapp.com/serviceDelete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                console.log('product deleted!');
            }
        });
    }

    return (
        <div className="d-flex mt-3 px-3 manageBody">
            <h6 className="one">{title}</h6>
            <h6 className="two">${price}</h6>
            <button onClick={() => handleDelete(_id)} className="btn deleteBtn three">Delete</button>
        </div>
    );
};

export default ServiceList;