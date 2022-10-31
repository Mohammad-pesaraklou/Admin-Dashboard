import React from 'react';

const Header = ({ category, title }) => {
    return (
        <div className='mb-10 mt-5'>
            <p className='text-2xl font-semibold'>{category}</p>
            <p className='text-3xl font-extrabold tracking-tight'>{title}</p>
        </div>
    );
};

export default Header;