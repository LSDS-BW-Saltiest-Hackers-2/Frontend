import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginForm(props) {
    return(
        <Form onSubmit={props.onSubmit}>
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
            <Link to='/sign-up'>Don't Have an Account? Sign Up Here</Link>
        </Form>
    )
}

export default LoginForm