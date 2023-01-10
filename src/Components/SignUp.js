import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { signUpSchema } from "../Validation/FormValidation";
import AuthUser from '../Http/Axios';
import ApiUrl from '../Http/ApiUrls';
const SignUp = () => {
    const navigate = useNavigate()
    const onSubmit = async (values) => {
        const { http, userInfo } = AuthUser()
        try {
            //const loginRes = await http.post(ApiUrl.signup)
            const loginRes = { data: { success: true } }
            if (loginRes?.data?.success || loginRes?.status === 200) {
                navigate('/')
            }
        } catch (error) {
            navigate('/signup')
        }
    }

    const initialValues = { fullName: '', email: '', password: '' }
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: onSubmit,
    })

    return (
        <>
            <>
                <div className='login-con'>
                    <h1>Sign Up</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group w-100 m-2">
                                <input type="text"
                                    className="form-control"
                                    name="fullName"
                                    value={values.fullName}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <small id="emailHelp" className="form-text text-danger">{touched.fullName ? errors?.fullName : ''}</small>
                            </div>
                            <div className="form-group w-100 m-2">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    value={values.email}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <small id="emailHelp" className="form-text text-danger">{touched.email ? errors?.email : ''}</small>
                            </div>
                            <div className="form-group w-100  m-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={values.password}
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <small id="emailHelp" className="form-text text-danger">{touched.password ? errors?.password : ''}</small>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 m-2">Sign Up</button>
                        </form>
                    </div>
                </div>
            </>
        </>
    )
}

export default SignUp;