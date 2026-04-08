import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OfflineAlert from "../OfflineAlert";

const Layout = () => {
    const location = useLocation()

    const hideFooter = ['/about', '/report', '/missing']
    return (
        <>
            <Navbar />
            <Outlet />
            {!hideFooter.includes(location.pathname) && <Footer />}
        </>
    )
}

export default Layout