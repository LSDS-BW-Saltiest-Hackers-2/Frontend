import React from 'react';
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
        </form>
    )
}

export default LoginForm