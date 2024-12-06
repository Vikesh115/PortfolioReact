import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoLogoVimeo } from "react-icons/io5";

function NavRes() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className="fixed w-[100%] z-20 flex bg-white  justify-center text-white">
            <div className="flex w-[90%] justify-between bg-black p-6">
            <NavLink to="/">
                <IoLogoVimeo size={36}/>
            </NavLink>
            <div className="hidden md:flex space-x-8 text-xl font-bold">
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "#66CDAA" : "white",
                    })}
                >
                    Main
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        color: isActive ? "#BA55D3" : "white",
                    })}
                >
                    About
                </NavLink>
                <NavLink
                    to="/project"
                    style={({ isActive }) => ({
                        color: isActive ? "#F0E68C" : "white",
                    })}
                >
                    Project
                </NavLink>
            </div>

            <div onClick={handleNav} className="md:hidden mr-4">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-opacity-100 bg-slate-800 duration-500"
                        : "w-[100%] duration-500 fixed left-[-100%]"
                }
            >
                <div className="flex flex-col justify-center items-center gap-4">
                    <b className="text-3xl bg-red-600 p-3">Portfolio</b>
                    <NavLink
                        to="/"
                        onClick={closeNav} // Close nav when this link is clicked
                        style={({ isActive }) => ({
                            color: isActive ? "#66CDAA" : "white",
                        })}
                    >
                        Main
                    </NavLink>
                    <NavLink
                        to="/project"
                        onClick={closeNav} // Close nav when this link is clicked
                        style={({ isActive }) => ({
                            color: isActive ? "#F0E68C" : "white",
                        })}
                    >
                        Project
                    </NavLink>
                </div>
            </ul>
            </div>
        </div>
    );
}

export default NavRes;
