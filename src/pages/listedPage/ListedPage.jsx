import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedPage = () => {

    const [tab,setTab]=useState(0)
    return (
        <div className="mx-16">
            <div className="text-center text-2xl font-bold py-4 bg-gray-100 rounded-lg">
                <h1>Books</h1>

            </div>
            <div className="text-center my-6"> <button className="btn">Sort By</button></div>
           
            <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                
                <Link onClick={()=>setTab(0)} to='' className={`flex items-center  flex-shrink-0 px-5 py-3 space-x-2 ${tab==0? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
                    
                    <span>Read Book</span>
                </Link>
                <Link to={`wishlist`} onClick={()=>setTab(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab==1? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
                    
                    <span>Wishlist Book</span>
                </Link>
                
                
            </div>

            <Outlet></Outlet>
                        
    </div>
    );
};

export default ListedPage;