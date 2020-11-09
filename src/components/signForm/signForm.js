import React from 'react';
import {Formik} from 'formik';
import "./signForm.css"

const SignForm = () => (
    <div>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                } else if ( values.password.length < 3 ) {
                    errors.email = 'Password not valid';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <div className="form-block">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <h4>Email address</h4>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className='form-input'
                        />
                        <br/>
                        <div className='form-errors'>
                        {errors.email && touched.email && errors.email}
                        </div>
                        <h4>Password</h4>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className='form-input'
                        />
                        <br/>
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting} className='form-btn'>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </Formik>
    </div>
);

export default SignForm;