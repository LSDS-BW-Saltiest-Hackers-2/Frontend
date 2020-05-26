import React from 'react'

export default function SignUpForm(props) {

    const { 
        values,
        onSubmit,
        onInputChange,
        errors
    } = props 

    return (
        <form onSubmit={onSubmit} > 
            <h2>Sign Up</h2>

        <div>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
        </div>


            <label>First Name&nbsp;
                <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                />
            </label>

            <label>Last Name&nbsp;
                <input
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                />
            </label>

            <label>Username&nbsp;
                <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                />
            </label>

            <label>Password&nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>


            <button>Submit</button>

        </form>
    )


} 
