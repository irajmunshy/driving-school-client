import React, {  useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SingleList from '../SingleList/SingleList';
import './BookingList.css';

const BookingList = () => {
    const [servicesList, setServicesList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;

    useEffect(() => {
        fetch('https://morning-island-82484.herokuapp.com/serviceList?email=' + email)
        .then(res => res.json())
        .then(data => setServicesList(data))
    }, [])

    return (
        <div className="p-4 service-list">
            <div className="row">
                {
                    servicesList.map(serviceList => <SingleList serviceList={serviceList} ></SingleList>)
                }
            </div>
        </div>
    );
};

export default BookingList;