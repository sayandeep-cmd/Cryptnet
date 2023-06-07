import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { signUp } from '../Action/Authaction'
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom'


const forValidate = (formValue) => {
  const error = {};
  let emailValidate = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
  let passw = /^[A-Za-z]\w{7,14}$/

  if (!formValue.first_name) {
    error.first_name = "Please enter firstname"
  }
  if (!formValue.Last_name) {
    error.Last_name = "Please enter lastname"
  }
  if (!formValue.email) {
    error.email = "Please enter email"
  }
  else if (!emailValidate.test(formValue.email)) {
    error.email = "Wrong";
  }
  if (!formValue.password) {
    error.password = "Please enter Password"
  }
  else if (!passw.test(formValue.password)) {
    error.password = "wrong password"
  }
  console.log(error)
  return error;
}




function FormikForm() {
  let nav = useNavigate();
  const dispatchmethod = useDispatch();
  let formik = useFormik({
    initialValues: { first_name: "", Last_name: "", email: "", password: "", profile_pic: "" },
    validate: forValidate,
    onSubmit: (data) => {
      console.log('Submitted :', data)
      dispatchmethod(signUp(data))
      nav('/login')
    }
  })



  return (
    <div>
      <div class="login-box">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div class="user-box">
            <label for='first_name'></label>
            <input type='text' name='first_name' placeholder='First Name' value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
            {formik.touched.first_name && formik.errors.first_name ? (<span>{formik.errors.first_name}</span>) : ''}
          </div>
          <div class="user-box">
            <label for='Last_name'></label>
            <input type='text' name='Last_name' placeholder='Last Name' value={formik.values.Last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
            {formik.touched.Last_name && formik.errors.Last_name ? (<span>{formik.errors.Last_name}</span>) : ''}
          </div>
          <div className='user-box'>
            <label for='email'></label>
            <input type='email' name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
            {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : ''}
          </div>
          <div className='user-box'>
            <label for='password'></label>
            <input type='text' name='password' placeholder='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
            {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : ''}
          </div>
          <div className='user-box'>
            <label for='profile_pic'></label>
            <input type='file' name='profile_pic' placeholder='profile pic' onChange={(event) => formik.setFieldValue("profile_pic", event.target.files[0])} />
          </div>
          <button type="submit" className='loginbutton'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default FormikForm






{/* <div className='form-wrap'>
      <form onSubmit={formik.handleSubmit}>
        <label for='first_name'>First Name</label>
        <input type='text' name='first_name' placeholder='First Name' value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
        {formik.touched.first_name && formik.errors.first_name ? (<span>{formik.errors.first_name}</span>) : ''}<br />
        <label for='Last_name'>Last Name</label>
        <input type='text' name='Last_name' placeholder='Last Name' value={formik.values.Last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
        {formik.touched.Last_name && formik.errors.Last_name ? (<span>{formik.errors.Last_name}</span>) : ''}<br />

        <label for='email'>Email</label>
        <input type='email' name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
        {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : ''}<br />

        <label for='password'>Password</label>
        <input type='text' name='password' placeholder='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
        {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : ''}<br />

        <label for='profile_pic'>Profile Pic</label>
        <input type='file' name='profile_pic' placeholder='profile pic' onChange={(event) => formik.setFieldValue("profile_pic", event.target.files[0])} />
        <input type="submit" />
      </form>
    </div> */}