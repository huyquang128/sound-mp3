import { Routes, Route } from 'react-router';
import { publicRoutes } from './routes';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsCloseModalAuth } from './redux/modal-slice';
import HomeLayout from './layout/home-layout';
import DiscoverPage from './pages/discover';
import SsoCallback from './pages/SSO-CALLBACK';

function App() {
    const dispatch = useDispatch();
    const { isSignedIn } = useAuth();
    const { isLoaded } = useUser();

    useEffect(() => {
        isSignedIn && dispatch(setIsCloseModalAuth());
    }, [isSignedIn]);

    return (
        <Routes>
            <Route path="/sso-callback" element={<SsoCallback />} />
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<DiscoverPage />} />
                {publicRoutes.map((route, index) => {
                    const Layout = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.link}
                            element={<Layout />}
                        />
                    );
                })}
            </Route>
        </Routes>
    );
}

export default App;
