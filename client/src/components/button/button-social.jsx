import React from 'react';

function ButtonSocial({ title, icon }) {
    return (
        <div
            className="bg-sidebar-bg text-white flex rounded-full 
                    items-center py-3 px-10 gap-5 cursor-pointer"
        >
            <img src={icon} alt="" className="size-6 ml-5 shadow-2xl"/>
            <div className="text-sm ">{title}</div>
        </div>
    );
}

export default ButtonSocial;
