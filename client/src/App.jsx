import { Routes, Route } from 'react-router';
import { publicRoutes } from './routes';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsCloseModalAuth } from './redux/modal-slice';

function App() {
    const dispatch = useDispatch();
    const { isSignedIn } = useAuth();

    useEffect(() => {
        isSignedIn && dispatch(setIsCloseModalAuth());
    }, [isSignedIn]);

    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Layout = route.component;
                {
                    /* condition */
                }
                return (
                    <Route key={index} path={route.link} element={<Layout />} />
                );
            })}
        </Routes>
    );
}

export default App;
