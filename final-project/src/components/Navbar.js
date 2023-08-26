import React from 'react';
import { NavLink } from 'react-router-dom'

const activeClass = (params) => {
	return params.isActive ? "-mb-px bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" 
    : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
}

const Navbar = () => {
    return (
        <>
            <ul class="flex border-b justify-self-center justify-center max-w-screen-sm mx-auto text-center">
                <li className='-mb-px mr-1 w-1/3'>
                <NavLink to="/" className={activeClass}>All</NavLink>

                </li>
                <li className='mr-1 w-1/3'>
                <NavLink to="/active" className={activeClass}>Active</NavLink>

                </li>
                <li className='mr-1 w-1/3'>
                <NavLink to="/completed" className={activeClass}>Completed</NavLink>

                </li>
            </ul>
        </>
    );
};

export default Navbar;