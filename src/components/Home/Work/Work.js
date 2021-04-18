import React from 'react';
import work from '../../../images/work.png';
import './Work.css';

const Work = () => {
    return (
        <div className="work-area pt-5 pb-3">
            <div className="container mb-5 text-center">
                <h2>How It Work?</h2>
                <p className="mx-auto py-4 w-75">There are only a few easy steps until your traffic ticket is dismissed, your driving record is clean and your auto insurances rates are safe from increases:</p>
                <img src={work} className="img-fluid" alt=""/>
            </div>
        </div>
    );
};

export default Work;