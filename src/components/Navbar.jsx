import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-3 bg-purple-200 flex-wrap'>
            <div className='text-3xl font-extrabold italic'><span>&lt;</span><span className='text-purple-600'>Secure</span>
                <span className='text-black'>Stash</span><span className='text-purple-600'>/&gt;</span></div>
            <ul className='flex gap-4 flex-wrap'>
                <li><a className='hover:font-bold' href="">Home</a></li>
                <li><a className='hover:font-bold' href="">About</a></li>
                <li><a className='hover:font-bold' href="">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;