import React from 'react';
import logo from '../assets/gypsy2.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-8 flex md:justify-evenly justify-between bg-slate-800 text-white text-base-content">
                <aside className='md:text-lg text-center space-y-4'>
                    <img className='w-28 mx-auto' src={logo} alt="" />
                    <p>GypsyTales Ltd.<br />Providing Reliable Plan Since 2013</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;