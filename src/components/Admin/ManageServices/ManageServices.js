import React, { useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-island-82484.herokuapp.com/manageServices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="p-5">
            <div className="bg-white p-4 manageService-area">
                <div className="d-flex manageHeader">
                    <h6 className="one">Service Name</h6>
                    <h6 className="two me-3">Price</h6>
                    <h6 className="three">Action</h6>
                </div>
                <div className="services-container mt-3">
                    {
                        services.map(service => <ServiceList service={service}></ServiceList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;