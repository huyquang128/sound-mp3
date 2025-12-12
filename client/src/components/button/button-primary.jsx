import React from 'react';

function ButtonPrimary({ title }) {
    return (
        <div
            className="bg-sidebar-bg text-white  rounded-full 
                     py-3 px-10 gap-5 text-sm text-center cursor-pointer"
        >
            {title}
        </div>
    );
}

export default ButtonPrimary;
