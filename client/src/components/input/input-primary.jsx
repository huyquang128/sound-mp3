import React from 'react';

function InputPrimary({ title, ...props }) {
    return (
        <label className="">
            <div className="mb-2 text-white">{title}</div>
            <input
                className="w-full border-none bg-sidebar-bg rounded-md py-2 px-3"
                {...props}
                placeholder=""
                value=""
                onChange={() => {}}
            />
        </label>
    );
}

export default InputPrimary;
