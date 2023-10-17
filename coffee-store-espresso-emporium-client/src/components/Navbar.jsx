import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className='flex gap-10'>
                <Link to={"/"}>Home</Link>
                <Link to={"/addCoffee"}>Add Coffee</Link>
                <Link to={"/signup"}>SignUp</Link>
                <Link to={"/signin"}>Login</Link>
                <Link to={"/users"}>Users</Link>
            </ul>
        </div>
    );
};

export default Navbar;