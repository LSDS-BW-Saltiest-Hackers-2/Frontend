import React from 'react';

import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './SignUpForm.css'

export default function SignUpForm(props) {

    const { 
        values,
        onSubmit,
        onInputChange,
        errors,
        disabled
    } = props 

    return (

        <div className='form-container'>
            <Form onSubmit={onSubmit} > 
                <h1>Sign Up</h1>

            <div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>

            <FormGroup>
                <Label>Username&nbsp;
                    <Input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </Label>
            </FormGroup>
            
        <FormGroup>
            <Label>Password&nbsp;
                <Input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </Label>
        </FormGroup>

            <Button style={{backgroundColor:'#FF4500', 
            fontWeight:'bold'}} disabled={disabled}>
                Submit</Button>
        </Form>

        
    </div>



        
    )


} 
