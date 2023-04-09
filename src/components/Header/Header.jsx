import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='container md:flex md:justify-between md:items-center '>
            <div>
                <h1 className='font-bold text-3xl '>Finder</h1>
            </div>
          <div className='flex gap-4'>
          <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/appliedjobs'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
          </div>
          <div>
            <button className='bg-[#7E90FE] text-white font-semibold sm:p-2 md:p-4 rounded-lg'>Star Applying</button>
          </div>
        </nav>
    );
};

export default Header;