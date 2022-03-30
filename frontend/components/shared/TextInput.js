import React from 'react';

const TextInput = React.forwardRef(
  ({ label, type = 'text', helperText, ...rest }, ref) => {
    return (
      <div className='flex flex-col'>
        <label className='mb-1'>
          <span className='font-semibold'>{label}</span>
        </label>
        <input
          className='font-light px-4 py-2 border-2 border-black focus:outline-none focus:ring-1 ring-offset-2 ring-gray-900 transition-all'
          type={type}
          ref={ref}
          {...rest}
        />
        <label className='mt-px'>
          <span className='text-sm text-red-400'>{helperText}</span>
        </label>
      </div>
    );
  }
);

export default TextInput;
