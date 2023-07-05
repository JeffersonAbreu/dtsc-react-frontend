import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Leiaute = () => {
    return (
        <>
            <Header />
            <div className="container mb-5 pb-5">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}


export default Leiaute;