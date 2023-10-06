import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <p>Charm & Cheer Events</p>
                <div className="links">
                   <li><NavLink to='/' 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Home</NavLink></li>
                   <li> <NavLink to='/login'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Login</NavLink></li>
                   <li><NavLink to='/register'
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Register</NavLink></li>
                </div>
            </div>
        </>
    );
};

export default Navbar;