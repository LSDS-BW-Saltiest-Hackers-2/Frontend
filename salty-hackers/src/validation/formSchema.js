import * as yup from 'yup'

const formSchema = yup.object().shape({
   
    username: yup.string()
    .required('Username is required'),
    password: yup.string()
    .trim()
    .required()
    .min(5, 'Password must be at least 5 characters long'),

});

export default formSchema