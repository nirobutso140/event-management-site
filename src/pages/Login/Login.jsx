import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/ContextProvider";



const Login = () => {
  
    const {loginUser} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    
    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        loginUser(email, password)
        // setLoginError('')
        // setLoginSuccess('')
        
        .then(result=>{
            console.log(result.user);
            setLoginSuccess("You Logged In Successfully!!!")
        })
        .catch(error=>{
            setLoginError(error.message)
        })
    }

    return (
        <>
            <div className="register_form">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">Login</button>
                                </div>
                                <p>Are you new? please <Link to='/register'><button className="btn btn-link">Register</button> </Link></p>
                                {

                                        loginError? <p className="text-red-600">{loginError}</p> : <p className="text-green-600">{loginSuccess}</p>
                                }
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;