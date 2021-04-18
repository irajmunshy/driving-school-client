import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faClock, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import {useSpring, animated} from 'react-spring';

const Header = () => {
    const teachers = useSpring({ number: 28, from: { number: 1 } });
    const hours = useSpring({ number: 1290, from: { number: 1 } });
    const years = useSpring({ number: 5, from: { number: 1 } });

    return (
        <div>
            <div className="banner-area">
                <Navbar />
                <Main />
            </div>
    
            <div className="school-info">
                <div className="row text-white mx-auto">
                    <div className="col-md-4 mb-3 d-flex align-items-center justify-content-center">
                        <div>
                            <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </div>

                        <div>
                            <h2><animated.span>{teachers.number}</animated.span></h2>
                            <h6>Teachers</h6>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 d-flex align-items-center justify-content-center">
                        <div>
                            <FontAwesomeIcon icon={faClock} />
                        </div>

                        <div>
                            <h2><animated.span>{hours.number}</animated.span></h2>
                            <h6>Training Hours</h6>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mb-3 d-flex align-items-center justify-content-center">
                        <div>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>

                        <div>
                            <h2><animated.span>{years.number}</animated.span></h2>
                            <h6>Working Years</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;