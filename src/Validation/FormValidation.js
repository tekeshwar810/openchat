import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    fullName: Yup.string().required('Please enter your fullname'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(5).required('Please enter password'),
})