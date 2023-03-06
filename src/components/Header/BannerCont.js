import React from 'react'
import { Link } from 'react-router-dom'

const Bannercont = () => {
    return (
        <>
            <section className='banner-cont text-center'>
                <div className='container'>
                    <h1>interior house</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <Link to='/' className='contact-us'><span>contact us</span></Link>
                </div>
            </section>
        </>
    )
}

export default Bannercont