import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 py-6 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4 shadow bg-base-100 rounded-box w-52">
                <NavLink to="/"className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn "}>Home</NavLink>
                <NavLink to='/listedbook'className= {({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn" } >Listed Book</NavLink>
                <NavLink to='/readpage' className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn"}>Pages to read</NavLink>
                <NavLink to='/feedback' className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn"}>FeedBack</NavLink>
                <NavLink to='/user' className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn"}>User</NavLink>
                </ul>
                </div>
                <a className="text-3xl font-bold"><span className="text-5xl">B</span>ook<span className="text-success">
                vibe</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                <NavLink to="/"className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn "}>Home</NavLink>
                <NavLink to='/listedbook'className= {({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn" } >Listed Book</NavLink>
                <NavLink to='/readpage' className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn"}>Pages to read</NavLink>
                <NavLink to='/feedback' className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn"}>FeedBack</NavLink>
                <NavLink to='/user' className={({isActive})=> isActive ? 'btn border-success text-success': "font-semibold btn"}>User</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-success text-white mr-4 ">Sign In</a>
                <a className="btn btn-info text-white">Sign Up</a>
            </div>
            </div>
    );
};

export default Nav;