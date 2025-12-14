import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UiPlaySong from '../components/Ui-Play-Song';

function HomeLayout() {
    return (
        <div className="">
            <Sidebar />
            <Header />
            <Outlet />
            <UiPlaySong />
        </div>
    );
}

export default HomeLayout;
