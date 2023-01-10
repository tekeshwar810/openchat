import { useFormik } from 'formik';
import {  Link,useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const onSubmit = async (values) => {
        try {
            //const loginRes = await http.post(ApiUrl.login)
            const loginRes = { data: { success: true } }
            if (loginRes?.data?.success || loginRes?.status === 200) {
                navigate('/chat')
            }
        }catch(error){
            navigate('/signup')
        }
    }

    const initialValues = { email: '', password: '' }
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        // validationSchema: signUpSchema,
        onSubmit: onSubmit,
    })

    return (
        <>
            <div className='login-con'>
                <h1>Login</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group w-100 m-2">
                                <input
                                    type="email"
                                    className="form-control"
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
                            <button type="submit" className="btn btn-primary w-100 m-2">Login</button>
                            <div className='login-note'>
                            <small id="emailHelp" className="form-text text-muted">If you have not account <a href='/signup'> <Link to='/signup'>Click Here!</Link></a></small>
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;