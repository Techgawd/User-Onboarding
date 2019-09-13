import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
const LoginForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      if (status) {
        setUsers([ ...users, status ])
      }
    }, [status])
  
  return (
    <div>
      <Form>
      {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field name="name" type="text" placeholder="Name" />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}
        <Field name="email" type="text" placeholder="Email" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <Field name="password" type="text" placeholder="Password" />
        <center><Field className= "checkbox" name="tos" type="checkbox" /></center>
        <h5>Agree to Terms of Service</h5>
        <button>Submit</button>
      </Form>
    </div>
  )
}
export default withFormik({
  mapPropsToValues: (props) => {
    return {
      name: props.name || '',
      email: props.email || '',
      password: props.password || '',
      tos: props.tos || false ,
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("NAME is required"),
      email: Yup.string()
      .required("EMAIL is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit: (values, { setStatus }) => {
    axios.post('https://reqres.in/api/animals', values)
      .then((res) => {
        setStatus(res.data)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }
})(LoginForm)

