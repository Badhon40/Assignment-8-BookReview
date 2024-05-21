import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";




const LayOut = () => {
    return (
        <div className=" md:px-4">
            <Nav></Nav>
            <div>
            <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default LayOut;