import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div className='flex justify-between my-4 p-4 bg-green-500 text-white sm:text-black sm:bg-green-800'>
            <NavLink
                to="/">
                <img className='h-8 w-8 mx-12' src="https://cdn-icons-png.flaticon.com/128/8644/8644474.png" alt="logo" />
            </NavLink>
            <div className='flex justify-between text-xl gap-9 space-x-16 mx-10'>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "#66CDAA" : "white",
                    })}>
                    Main
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        color: isActive ? "#BA55D3" : "white",
                    })}>
                    About
                </NavLink>
                <NavLink
                    to="/project"
                    style={({ isActive }) => ({
                        color: isActive ? "#F0E68C" : "white",
                    })}>
                    Project
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;