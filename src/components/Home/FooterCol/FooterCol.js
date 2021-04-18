import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    const {menuTitle, menuItems, children} = props;

    return (
        <div className="col-md-3 pt-4">
            <h6 className="">{menuTitle}</h6>

            <ul className="list-unstyled mt-4">
                {(!menuTitle && children) && children}
                 {
                     menuItems.map((item, index) => <li key={index}><Link to={item.link} >{item.name}</Link></li>)
                 }
            </ul>
            {(menuTitle && children) && children}
        </div>
    );
};

export default FooterCol;