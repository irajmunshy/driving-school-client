import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-island-82484.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container my-5 py-3">
            <div className="row">
                <h3 className="text-center pb-3">Our Services</h3>
                {
                    services.map(serviced => <Service serviced={serviced}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;