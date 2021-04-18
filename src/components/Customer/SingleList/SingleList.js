import React from 'react';

const SingleList = ({serviceList}) => {
    const {image, status, title, description} = serviceList;

    return (
        <div className="col-md-5">
            <div className="single-list">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={image} className="img-fluid" alt=""/>
                    {
                        status == 'done' ? <button className="btn doneBtn">Done</button> : 
                        status == 'pending' ? <button className="btn pendingBtn">Pending</button> : <button className="btn OnGoingBtn">OnGoing</button>
                    }
                </div>
                <h6 className="pt-3">{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleList;