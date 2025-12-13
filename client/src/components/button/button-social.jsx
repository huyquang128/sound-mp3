import { useSignIn } from '@clerk/clerk-react';
import React from 'react';

function ButtonSocial({ title, icon, strategy_name = 'google' }) {
    const { signIn } = useSignIn();

    const strategy = `oauth_${strategy_name}`;

    const login = () => {
        signIn.authenticateWithRedirect({
            strategy,
            redirectUrl: '/sso-callback',
            redirectUrlComplete: '/',
        });
    };

    return (
        <div
            onClick={login}
            className="bg-sidebar-bg text-white flex rounded-full 
                    items-center py-3  gap-5 cursor-pointer justify-center"
        >
            <img src={icon} alt="" className="size-6 ml-5 shadow-2xl " />
            <div className="text-sm w-[170px]">{title}</div>
        </div>
    );
}

export default ButtonSocial;
