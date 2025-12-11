import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function HomeLayout() {
  return (
    <div className="">
      <Sidebar />
      <Header />
      <Main/>
    </div>
    
  );
}

export default HomeLayout;
