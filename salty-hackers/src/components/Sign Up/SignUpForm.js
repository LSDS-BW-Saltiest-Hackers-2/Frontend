import React from 'react'
import './SignUpForm.css'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default function SignUpForm(props) {

    const { 
        values,
        onSubmit,
        onInputChange,
        errors,
        disabled
    } = props 

    return (

        <Form onSubmit={onSubmit} > 
            <h2>Sign Up</h2>

        <div>
              
                <div></div>
                <div></div>
        </div>
            <FormGroup>
                    <label>Username&nbsp; </label>
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                    <FormFeedback invalid>{errors.username}</FormFeedback>
               
            </FormGroup>
            
            <FormGroup>
                <label>Password&nbsp;</label>
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
            
            <FormFeedback invalid>{errors.password}</FormFeedback>
            </FormGroup>
            


            <Button disabled={disabled}>Submit</Button>

        </Form>
    )


} 
