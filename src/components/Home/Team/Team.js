import React from 'react';
import './Team.css';

const Team = ({team}) => {
    const {img, driverName, skills} = team;

    return (
        <div className="col-md-4">
            <div className="team-info">
                <img src={img} className="img-fluid" alt=""/>
                <h5 className="text-dark pt-3">{driverName}</h5>
                <h5 className="text-secondary pb-3">{skills}</h5>
            </div>
        </div>
    );
};

export default Team;