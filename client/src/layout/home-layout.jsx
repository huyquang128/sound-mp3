import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function HomeLayout() {
    return (
        <div className="">
            <Sidebar />
            <Header />
            <Outlet />
        </div>
    );
}

export default HomeLayout;
