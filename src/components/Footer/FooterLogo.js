import React from 'react'
import logo from '../../images/logo.png';

const FooterLogo = () => {
    return (
        <>
            <div className='col-md-4'>
                <div className='footer-logo'>
                    <a href='#'><img src={logo} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default FooterLogo