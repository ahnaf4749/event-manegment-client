import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { Hero, Navbar } from '../components';
import './Main.css'

const Main = () => {
    // bg-gradient-to-r from-[#1C162D] to-[#2E1D62]
    return (
        <div className='relative z-0 bg-main'>
            <div className="">
                <Navbar />
                <Hero />
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;