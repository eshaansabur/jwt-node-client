import React from 'react';
import auth from '../Firebase/firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleuser, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();
    const [user, loading2, error2] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";
    const handleSignIn =() =>{
        signInWithGoogle();
    }
    if(user){
        const url = 'http://localhost:5000/login';
        fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: user.email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('accessToken', data.token);
            navigate(from, { replace: true });
        });
    }
    return (
        <div className='container'>
            <h2>Login</h2>
            <button onClick={handleSignIn} type='button' className='btn btn-warning px-3'>Login with Google</button>
        </div>
    );
};

export default Login;