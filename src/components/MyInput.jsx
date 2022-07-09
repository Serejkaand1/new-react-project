import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input className='product_input' {...props} />
    );
});

export default MyInput;