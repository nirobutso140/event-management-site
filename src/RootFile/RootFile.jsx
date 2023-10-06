import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const RootFile = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default RootFile;