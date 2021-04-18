import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AddService from './AddService/AddService';
import ManageServices from './ManageServices/ManageServices';
import MoreAdmin from './MoreAdmin/MoreAdmin';
import Orders from './Orders/Orders';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { UserContext } from '../../App';

const adminBg = {
    background: '#F4F7FC',
    height: '90vh',
    marginTop: '2px'
}
const divStyle = {
    overflowX : 'hidden'
}

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    const [pathSelected, setPathSelected] = useState('');
    const history = useHistory();

    !pathSelected && history.push('/admin/orders');
    const handleSidebar = (path) => {
        setPathSelected(path);
        history.push(`/admin/${path}`);
    }

    return (
        <div style={divStyle}>
            <div className="row">
                <div className="col-md-2 sidebar-area">
                    <div className="nav-title mt-3 ms-3">
                        <Link to="/"><h3>Driving School</h3></Link>
                    </div>

                    <Sidebar handleSidebar={handleSidebar} admin={'admin'} />
                </div>

                <div className="col-md-10">
                    <div className="d-flex align-items-center justify-content-between pt-3 pb-3 mx-5">
                        <h5>{
                                pathSelected == 'addService' ? 'Add Service' :
                                pathSelected == 'moreAdmin' ? 'More Admin' :
                                pathSelected == 'manageServices' ? 'Manage Services' : 'Order List'
                            }
                        </h5>
                        <h6>{loggedInUser.name ? loggedInUser.name : loggedInUser.email.slice(0, -10)}</h6>
                    </div>

                    <div style={adminBg}>
                        {
                            pathSelected == 'addService' ? <AddService /> :
                            pathSelected == 'moreAdmin' ? <MoreAdmin /> :
                            pathSelected == 'manageServices' ? <ManageServices /> : <Orders />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;