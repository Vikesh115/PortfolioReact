import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { IoLogoVimeo } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggletheme } from "../redux/slice";

function NavRes() {
    const [nav, setNav] = useState(false);

    const {theme} = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className={` fixed w-[100%] z-20 flex justify-center div duration-300 ${theme === 'light'
            ? 'bg-white text-black'
            : 'bg-black text-white'
            }`}>
            <div className="flex w-[100%] justify-between p-6">
                <NavLink to="/">
                    <IoLogoVimeo size={36} />
                </NavLink>
                <div className="hidden md:flex space-x-8 text-xl font-bold">
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? "pink" : "blue",
                        })}
                    >
                        Main
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? "yellow" : "blue",
                        })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/project"
                        style={({ isActive }) => ({
                            color: isActive ? "green" : "blue",
                        })}
                    >
                        Project
                    </NavLink>
                    {/* Resume Section */}
                    <a
                        href="/Resume/Vikesh-Full-Stack-Developer.pdf"
                        download="Resume.pdf"
                        className="hover:text-[#FFD700] text-indigo-400 transition-all duration-200"
                    >
                        Resume
                    </a>
                    <button onClick={()=>dispatch(toggletheme())}>
                        {theme === 'light' ? (
                            <FaMoon size={20} />
                        ) : (
                            <FaSun size={20} />
                        )}
                    </button>
                </div>

                <div onClick={handleNav} className="md:hidden mr-4">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <ul
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-opacity-100 bg-slate-800 duration-500"
                            : "w-[100%] duration-500 fixed left-[-100%]"
                    }
                >
                    <div className="flex flex-col justify-center items-center gap-4">
                        <b className="text-3xl bg-red-600 p-3">Portfolio</b>
                        <NavLink
                            to="/"
                            onClick={closeNav} // Close nav when this link is clicked
                            style={({ isActive }) => ({
                                color: isActive ? "grey" : "blue",
                            })}
                        >
                            Main
                        </NavLink>
                        <NavLink
                            to="/project"
                            onClick={closeNav} // Close nav when this link is clicked
                            style={({ isActive }) => ({
                                color: isActive ? "grey" : "blue",
                            })}
                        >
                            Project
                        </NavLink>
                        {/* Resume Section for Mobile */}
                        <a
                            href="/path/to/your-resume.pdf"
                            download="My_Resume.pdf"
                            className="hover:text-red-700 transition-all duration-200"
                            onClick={closeNav}
                        >
                            Resume
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default NavRes;
