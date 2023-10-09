import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => console.log("logout successfully"))
            .catch(error => console.error(error))
    }

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

                    {
                        user &&
                        <>
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
                        </>
                    }
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
                <div className="userInfo_logout">
                    {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <button onClick={handleLogOut} className="btn btn-sm">Log out</button>
                            </>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm">Log in</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;