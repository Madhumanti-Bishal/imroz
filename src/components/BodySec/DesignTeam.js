import React from 'react'
import picone from '../../images/picone.jpg';
import pictwo from '../../images/pictwo.jpg';
import picthree from '../../images/picthree.jpg';
import picfour from '../../images/picfour.jpg';

const DesignTeam = () => {
    return (
        <>
            <section className='design-team'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>Meet Our Designer</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3 col-6'>
                            <div className='team-img'>
                                <figure className='image-box'>
                                    <img src={picone} alt="" />
                                </figure>
                                <div class="overlay-one">
                                    <div class="overlay-inner">
                                    </div>
                                </div>
                                <div class="caption-box-one overlay-cont">
                                    <ul className='d-flex mb-2'>
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                    <div className='client-name'>
                                        <h4>Jone Due</h4>
                                        <p>Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <div className='team-img'>
                                <figure className='image-box'>
                                    <img src={pictwo} alt="" />
                                </figure>
                                <div class="overlay-one">
                                    <div class="overlay-inner">
                                    </div>
                                </div>
                                <div class="caption-box-one overlay-cont">
                                    <ul className='d-flex mb-2'>
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                    <div className='client-name'>
                                        <h4>Jone Due</h4>
                                        <p>Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <div className='team-img'>
                                <figure className='image-box'>
                                    <img src={picthree} alt="" />
                                </figure>
                                <div class="overlay-one">
                                    <div class="overlay-inner">
                                    </div>
                                </div>
                                <div class="caption-box-one overlay-cont">
                                    <ul className='d-flex mb-2'>
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                    <div className='client-name'>
                                        <h4>Jone Due</h4>
                                        <p>Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-6'>
                            <div className='team-img'>
                                <figure className='image-box'>
                                    <img src={picfour} alt="" />
                                </figure>
                                <div class="overlay-one">
                                    <div class="overlay-inner">
                                    </div>
                                </div>
                                <div class="caption-box-one overlay-cont">
                                    <ul className='d-flex mb-2'>
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                    <div className='client-name'>
                                        <h4>Jone Due</h4>
                                        <p>Sr. Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DesignTeam