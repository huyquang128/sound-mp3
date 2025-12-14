import { Routes, Route } from 'react-router';
import { publicRoutes } from './routes';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsCloseModalAuth } from './redux/modal-slice';
import { HomeIcon } from 'lucide-react';
import HomeLayout from './layout/home-layout';

function App() {
    const dispatch = useDispatch();
    const { isSignedIn } = useAuth();

    useEffect(() => {
        isSignedIn && dispatch(setIsCloseModalAuth());
    }, [isSignedIn]);

    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
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
