import * as yup from 'yup'

const formSchema = yup.object().shape({
   
    username: yup.string()
    .required('Please create a username'),
    password: yup.string()
    .trim()
    .required('Please create a password')
    .min(5, 'Password must be at least 5 characters long'),

});

export default formSchema