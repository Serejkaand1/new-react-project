import React from 'react';

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className='product_button'>
            {children}
        </button>
    );
};

export default MyButton;

