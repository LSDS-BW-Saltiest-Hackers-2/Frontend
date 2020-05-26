import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function LoginForm({ values, onChange, onSubmit }) {
    return(
        <form onSubmit={onSubmit}>
            <label>Username:
                <input
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                />
            </label>
            <button>
                Log In
            </button>
             <Link to='/sign-up'>Don't Have an Account? Sign Up Here</Link>
        </form>
    )
}

export default LoginForm