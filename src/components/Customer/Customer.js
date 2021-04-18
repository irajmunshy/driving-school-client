import React, { useContext, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Book from './Book/Book';
import Review from './Review/Review';
import BookingList from './BookingList/BookingList';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const adminBg = {
    background: '#F4F7FC',
    height: '90vh',
    marginTop: '2px'
}
const divStyle = {
    overflowX : 'hidden'
}

const Customer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    const [pathSelected, setPathSelected] = useState('');
    const history = useHistory();

    !pathSelected && history.push('/customer/book');
    const handleSidebar = (path) => {
        setPathSelected(path);
        history.push(`/customer/${path}`);
    }

    return (
        <div style={divStyle}>
            <div className="row">
                <div className="col-md-2 sidebar-area">
                    <div className="nav-title mt-3 ms-3">
                        <Link to="/"><h3>Driving School</h3></Link>
                    </div>

                    <Sidebar handleSidebar={handleSidebar} />
                </div>

                <div className="col-md-10">
                    <div className="d-flex align-items-center justify-content-between pt-3 pb-3 mx-5">
                        <h5>{
                                pathSelected == 'bookingList' ? 'BookingList' :
                                pathSelected == 'review' ? 'Review' : 'Book'
                            }
                        </h5>
                        <h6>{loggedInUser.name ? loggedInUser.name : loggedInUser.email.slice(0, -10)}</h6>
                    </div>

                    <div style={adminBg}>
                        {
                            pathSelected == 'bookingList' ? <BookingList /> :
                            pathSelected == 'review' ? <Review /> : <Book />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;