import React from 'react';

const Input = ({ type, value, onChange, ...props }) => {
    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <input
            className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            value={value || ''}
            type={type}
            onChange={handleChange}
            {...props}
        />
    );
};

export default Input;
