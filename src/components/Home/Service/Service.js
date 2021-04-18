import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ServiceContext, UserContext } from '../../../App';

const Service = ({serviced}) => {
    const {image, title, price} = serviced;
    const [service, setService] = useContext(ServiceContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const {email, name} = loggedInUser;

    const handleBook = (serviced) => {
        const booking = {...serviced, email: email, name: name, status: 'pending'};
        fetch('https://morning-island-82484.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => console.log('Added'))

        const newServes = {...service};
        newServes.id = serviced._id;
        setService(newServes);
        history.push('/customer/book');

    }


    return (
        <div className="col-md-3">
            <div className="service-info mb-4">
                <img src={image} className="img-fluid" alt=""/>
                <h5 className="px-2 pt-3">{title}</h5>
                {/* <p className="text-justify">{description}</p> */}
                <div className="px-3 py-4  d-flex justify-content-between">
                    <button onClick={() => handleBook(serviced)} className="btn bookNow">Book Now</button>
                    <h6 className="pb-2 price">${price}</h6>
                </div>
            </div>
        </div>
    );
};

export default Service;