import { Outlet } from "react-router-dom";
import Footer from "../Page/Footer";
import Navber from "../Page/Navber";


const MainLayout = () => {
    return (
        <div>
            
            <Navber></Navber>
            <div className="">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;