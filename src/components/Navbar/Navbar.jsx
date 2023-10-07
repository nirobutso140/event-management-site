import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <p className="logo">Charm & Cheer</p>
                <div className="links">
                    <li><NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >Home</NavLink></li>

                    <li><NavLink to='/about'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >About Us</NavLink></li>
                    <li><NavLink to='/team' 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 " : ""
                    }
                    >Our Team</NavLink></li>
                    <li> <NavLink to='/login'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400" : ""
                        }
                    >Login</NavLink></li>
                    <li><NavLink to='/register'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400" : ""
                        }
                    >Register</NavLink></li>
                </div>
            </div>
        </>
    );
};

export default Navbar;