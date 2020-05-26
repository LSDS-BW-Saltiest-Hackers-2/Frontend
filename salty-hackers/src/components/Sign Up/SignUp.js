import React, { useState } from 'react'
import axios from 'axios'
import SignUpForm from './SignUpForm'
import * as yup from 'yup'
import { Route } from 'react-router-dom'


const intaialFormValues = {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  }
  
  const initalFormErrors = {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  }

  const url = `https://reqres.in/api/users`

  export default function SignUp() {
    //state

    const [ formValues, setFormValues ] = useState(intaialFormValues)
    const [ users, addUsers] = useState([])
    const [ formErrors, setFormErrors ] = useState(initalFormErrors)

  //post new user  
    const postNewUser = newUser => {
        axios.post(url, newUser)
        .then(res => {
          console.log(res)
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
          setFormValues({
            ...formValues, [name]:value
          })
      }    

        
      const onSubmit = evt => {
        evt.preventDefault()
        const newUser = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            username: formValues.username.trim(),
            password: formValues.password.trim(),
          }
      
          postNewUser(newUser)
          }


      return (

      <Route path='/sign-up'> 
            <SignUpForm values = {formValues} onSubmit = {onSubmit}
            onInputChange = {onInputChange} errors = {formErrors} />
      </Route>
      )


  }


  




