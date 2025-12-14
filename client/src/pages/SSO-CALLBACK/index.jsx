import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import { useEffect } from 'react';

function SsoCallback() {
    useEffect(() => {}, []);
    return (
        <AuthenticateWithRedirectCallback>
            <div
                className="flex justify-center items-center text-white
                            fixed inset-0 z-999"
            >
                <div className="bg-btn-primary size-32">
                    <h3>Đang đăng nhập...</h3>
                    <p>Vui lòng chờ trong giây lát</p>
                </div>
            </div>
        </AuthenticateWithRedirectCallback>
    );
}

export default SsoCallback;
