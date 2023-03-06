import React from 'react'
import Copyright from './Copyright'
import FooterLogo from './FooterLogo'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer className='footer-bg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <FooterLogo />
                    <SocialIcons />
                    <Copyright />
                </div>
            </div>
        </footer>
    )
}

export default Footer