import React from 'react'

export default function SignUpForm(props) {

    const { 
        values,
        onSubmit,
        onInputChange,
        errors,
        disabled
    } = props 

    return (

        <form onSubmit={onSubmit} > 
            <h2>Sign Up</h2>

        <div>
              
                <div>{errors.username}</div>
                <div>{errors.password}</div>
        </div>

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


            <button disabled={disabled}>Submit</button>

        </form>
    )


} 
