import React from 'react'
import './SignUpForm.css'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom'

export default function SignUpForm(props) {

    const { 
        values,
        onSubmit,
        onInputChange,
        errors,
        disabled
    } = props 

    return (

        <div>
            
            <h2 className='sign-up-header'>Sign Up</h2>


        <Form onSubmit={onSubmit} className='sign-up' > 
            <FormGroup>
                    <Label>Username&nbsp; </Label>
                    <Input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        placeholder='username'
                        type='text'
                    />
                    <FormFeedback invalid>{errors.username}</FormFeedback>
               
            </FormGroup>
            
            <FormGroup>
                <Label>Password&nbsp;</Label>
                    <Input
                        value={values.password}
                        onChange={onInputChange}
                        placeholder='password'
                        name='password'
                        type='text'
                    />
            
            <FormFeedback invalid>{errors.password}</FormFeedback>
            </FormGroup>
            


            <Button disabled={disabled}>Submit</Button>
            
            <Link to='/login'>
              <span>Already have an account?</span>
            </Link>

        </Form>

        
    </div>
            

        
    )


} 
