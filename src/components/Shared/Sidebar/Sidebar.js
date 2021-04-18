import { faCommentAlt, faPlus, faShoppingBag, faShoppingCart, faSignOutAlt, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Sidebar.css';
import firebase from "firebase/app";
import "firebase/auth";

const Sidebar = ({handleSidebar, admin}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const handleLogOut = () => {
        firebase.auth().signOut()
        .then((res) => {  
            const signOutUser = {
                userName: '',
                email: '',
                error: '',
                photo: '',
                password: '',
                confirmPassword: '',
                isLoggedIn: false
            } 
            setLoggedInUser(signOutUser);
            sessionStorage.removeItem('token');
        })
        .catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="d-flex flex-column sidebar-detail ms-3 justify-content-between">
            {admin ?     
                <ul className="list-unstyled pt-3">
                    <li onClick={() => handleSidebar('orders', true)}>
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                    </li>
                    <li onClick={() => handleSidebar('addService')}>
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </li>
                    <li onClick={() => handleSidebar('moreAdmin')}>
                        <FontAwesomeIcon icon={faUserPlus} /> <span>More Admin</span>
                    </li>
                    <li onClick={() => handleSidebar('manageServices')}>
                        <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                    </li>
                </ul>
                :
                <ul className="list-unstyled pt-3">
                    <li onClick={() => handleSidebar('book', true)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </li>
                    <li onClick={() => handleSidebar('bookingList')}>
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span>
                    </li>
                    <li onClick={() => handleSidebar('review')}>
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </li>
                </ul>
            }

            <div className="logout" onClick={handleLogOut}>
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>LogOut</span>
            </div>
        </div>
    );
};

export default Sidebar;