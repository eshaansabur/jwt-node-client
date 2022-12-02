import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading2, error2] = useSignOut(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">gadget freak</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/uploadPd">Upload Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/orders">Order List</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
            <span className="navbar-text">
                {
                    user? <span>{user?.displayName} <button onClick={() => logout()} className='btn btn-link'>Sign Out</button></span>: '' 
                }
            </span>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;