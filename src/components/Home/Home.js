import React, { useContext, useEffect } from 'react';
import { AdminContext, UserContext } from '../../App';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Teams from './Teams/Teams';
import Testimonials from './Testimonials/Testimonials';
import Work from './Work/Work';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;

    const [isAdmin, setAdmin] = useContext(AdminContext);

    useEffect(() => {
        fetch('https://morning-island-82484.herokuapp.com/findAdmin', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])

    return (
        <div>
            <Header />
            <Services />
            <Work />
            <Teams />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;