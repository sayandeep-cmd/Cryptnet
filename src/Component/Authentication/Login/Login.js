import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch } from 'react-redux'
import { signIn } from '../Action/Authaction'
import {Link} from 'react-router-dom'











{/* <div className='form-wrap'>
        
        <form onSubmit={login.handleSubmit} id='signin' >
        <label>Sign in</label>
        <input type="text" name="email" placeholder='Email' value={login.values.email} onChange={login.handleChange}/><br/>
        <input type="password" name="password" placeholder="password" value={login.values.password} onChange={login.handleChange}/><br/>
        <input type='submit' />
        </form>
       
    </div> */}







function Login() {
  let dispach=useDispatch();
  let nav = useNavigate()
  let login = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (data) => {
      console.log('Login creds', data)
      let loginappend = new FormData()
      loginappend.append("email", data.email)
      loginappend.append("password", data.password)
      axios.post('https://wtsacademy.dedicateddevelopers.us/api/user/signin', loginappend).then(res => {
        console.log(res.data)
        if (res.data.status === 200) {
          alert('Successful')
          window.sessionStorage.setItem("token", res.data.token)
          window.sessionStorage.setItem("username", res.data.data.first_name)
          nav('/')
        }
        else
          alert('failed' + res.data.message)
      })
        .catch(err => { })
      // dispach(signIn(data))
    }
  })


  return (
    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={login.handleSubmit}>
        <div class="user-box">
          <input type="text" name="email" required="" value={login.values.email} onChange={login.handleChange}/>
            <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="password" required="" value={login.values.password} onChange={login.handleChange}/>
            <label>Password</label>
        </div>
        <button type="submit" className='loginbutton'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <h6>Register first <Link to="/register"><a style={{color:"#1589FF"}}>click here</a></Link></h6>
    </div>

  )
}

export default Login




{/* <div className='form-wrap'>
        
        <form onSubmit={login.handleSubmit} id='signin' >
        <label>Sign in</label>
        <input type="text" name="email" placeholder='Email' value={login.values.email} onChange={login.handleChange}/><br/>
        <input type="password" name="password" placeholder="password" value={login.values.password} onChange={login.handleChange}/><br/>
        <input type='submit' />
        </form>
       
    </div> */}