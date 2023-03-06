import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png';

const Header = () => {
    let activeStyle = {
        color: "#f9004d"
    };
    let activeClassName = "underline";

    useEffect(() => {
        let header = document.querySelector('.top-header');
        const onScroll = () => {
            let scrolledPage = Math.round(window.pageYOffset);
            if (scrolledPage > 60) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
        document.addEventListener('scroll', onScroll);

    }, [])
    const toggleNavbar = () => {
        const burger = document.getElementById('navbar-toggler');
        const ul = document.getElementById('nav-menu-list');
        var body = document.body;
        burger.classList.toggle('show-x');
        ul.classList.toggle('show');
        body.classList.toggle("main-wrp");

    }

    return (
        <header className='top-header'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='logo'>
                        <a href='#'><img src={logo} alt="" /></a>
                    </div>
                    <button aria-label="navbar toggler" class="navbar-toggler" type="button" id="navbar-toggler" onClick={() => toggleNavbar()}>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <nav id='nav-menu-list' className='navbar'>
                        <ul className='d-flex'>
                            <li>
                                <NavLink to='/' style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Get Start</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Team</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header