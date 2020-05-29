import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginForm.css'

function LoginForm(props) {
    return(
        <div className='form-container'>
        <Form onSubmit={props.onSubmit}>
            <div className='h1'>
                <h1>Login</h1>
            </div>
            <FormGroup>
                <Label>Username:
                    <Input
                        type='text'
                        name='username'
                        value={props.values.username}
                        onChange={props.onChange}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label>Password:
                    <Input
                        type='password'
                        name='password'
                        value={props.values.password}
                        onChange={props.onChange}
                    />
                </Label>
            </FormGroup>
            <Button>
                Log In
            </Button>
            <br></br>
            <br></br>
            <Link to='/sign-up'>Don't Have an Account? Sign Up Here</Link>
        </Form>
        </div>
    )
}

export default LoginForm