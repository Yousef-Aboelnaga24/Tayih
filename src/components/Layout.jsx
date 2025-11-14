import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showFooter=true }) => {
    return (
        <>
            <Navbar />
            {children}
            {showFooter && <Footer />}
        </>
    )
}

export default Layout