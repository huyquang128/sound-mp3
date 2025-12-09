import { Routes, Route } from 'react-router';
import { publicRoutes } from './routes';

function App() {
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
