import Navbar from "./Navbar";
import Footer from "./Footer";
import OfflineAlert from "../../pages/OfflineAlert";

const Layout = ({ children, showFooter = true }) => {
    return (
        <>
            <OfflineAlert />
            <Navbar />
            {children}
            {showFooter && <Footer />}
        </>
    )
}

export default Layout