import React from 'react';
import Banner from '../../../images/banner.jpg';
import DriverOne from '../../../images/driver1.jpg';
import DriverTwo from '../../../images/driver2.jpg';
import DriverThree from '../../../images/driver3.jpg';
import './Main.css';

const Main = () => {
    return (
            <div className="main-area">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={DriverOne} class="img-fluid d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block banner-detail">
                                <h1>We Learn To Drive Easy</h1>
                                <h5 className="py-3">We Can educate even a Chico</h5>
                                <button className="btn admissionBtn">Admission</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={DriverTwo} class="img-fluid d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block banner-detail">
                                <h1>We Learn To Drive Easy</h1>
                                <h5 className="py-3">We Can educate even a Chico</h5>
                                <button className="btn admissionBtn">Admission</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={DriverThree} class="img-fluid d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block banner-detail">
                                <h1>We Learn To Drive Easy</h1>
                                <h5 className="py-3">We Can educate even a Chico</h5>
                                <button className="btn admissionBtn">Admission</button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    );
};

export default Main;