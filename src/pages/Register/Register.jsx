import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
  
    const hadleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value  
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email, password);
        console.log("kaj kor");
    }

    return (
        <>


        <div className="register_form">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hadleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Login</button>
                            </div>
                            <p>Already have an account? please <Link to='/login'><button className="btn btn-link">Login</button> </Link></p>
                        </form>
                        
                    </div>
                </div>
            </div>
            </div> 
        </>
    );
};

export default Register;