import React, { useState } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
const LoginForm = (props) => {
  console.log(props);
  return (
    <div>
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <Field name="email" type="text" placeholder="Email" />
        <Field name="password" type="text" placeholder="Password" />
        <br></br>
        <Field name="tos" type="checkbox" /><h5>Agree to Terms of Service</h5>
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
      password: props.password || ''
    }
  }
})(LoginForm)