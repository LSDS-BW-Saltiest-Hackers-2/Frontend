import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import { Route, Link} from 'react-router-dom';
import * as yup from 'yup';
import formSchema from '../../validation/formSchema';




const intaialFormValues = {
    username: '',
    password: ''
  }
  
  const initalFormErrors = {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  }

  const intialDisabled = true 

  const url = `https://saltyhackers2.herokuapp.com/auth/register`

  export default function SignUp() {
    //state

    const [ formValues, setFormValues ] = useState(intaialFormValues)
    const [ users, addUsers] = useState([])
    const [ formErrors, setFormErrors ] = useState(initalFormErrors)
    const [ disabled, setDisabled ] = useState(intialDisabled)


  //post new user  
    const postNewUser = newUser => {
        axios.post(url, newUser)
        .then(res => {
          console.log(res.data, 'user created')
          addUsers([res.data, ...users])
        })
        .catch(err => {
          debugger
        })
        .finally(() => {
          setFormValues(intaialFormValues)
        })
      
      }


  //change handlers
      const onInputChange = evt => {
          const name = evt.target.name
          const value = evt.target.value


          yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
              setFormErrors({
                ...formErrors,
                [name]: ''
              })
            })
            .catch(err => {
              setFormErrors({
                ...formErrors,
                [name]:err.errors[0]
              })
            })

            setFormValues({
              ...formValues, [name]:value
            })
      }    

        
      const onSubmit = evt => {
        evt.preventDefault()
        const newUser = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
          }

          console.log(newUser)
      
          postNewUser(newUser)
          }

  useEffect(() => {
        formSchema.isValid(formValues)
            .then(valid => {
              setDisabled(!valid)
            })
          }, [formValues])


      return (
          
          <div>
            <Link to='/login'>
              <button>Login</button>
            </Link>
            
          
              <Route path='/sign-up'> 
                <SignUpForm values = {formValues} onSubmit = {onSubmit}
                onInputChange = {onInputChange} errors = {formErrors} disabled={disabled} />
              </Route>
          </div>

      
      

      )


  }


  





