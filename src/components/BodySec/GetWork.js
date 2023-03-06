import React from 'react'
import { Link } from 'react-router-dom'

const GetWork = () => {
    return (
        <>
            <section className='ready-work'>
                <div className='container'>
                    <span>Ready to do this</span>
                    <h2>Let's get to work</h2>
                    <Link to='/' className='contact-us'><span>contact us</span></Link>
                </div>
            </section>
        </>
    )
}

export default GetWork