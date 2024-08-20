import {useNavigate} from "react-router-dom"
import { useState } from "react"
// using module css
import styles from "./Login.module.css"
import { useDispatch } from "react-redux"
import { useLoginMutation } from "./LoginSlice"

export default function Login() {
  const dispatch = useDispatch() // modifying state
  // use selector is getting state

  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const [loginMutation, {isLoading}] = useLoginMutation()
  console.log(" use login mutation: ", useLoginMutation())

  const update = (e) => {
    e.preventDefault()
    setLogin((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // submitting the form
  const submit = async (e) => {
    e.preventDefault()
    try {
      const response = await loginMutation(login).unwrap()

      if(response.token){
        sessionStorage.setItem('token', response.token)
        navigate('/') // redirect to home page after login
      }
    } catch (error) {
      console.error("Login failed: ", error)
      alert("Login failed. Please check your credentials")
    }
  }       

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email</label>
        <input 
        type="email" 
        name="email" 
        value={login.email}
        onChange={update}
        placeholder="Enter Email"
        className="form-control"
        disabled={isLoading}
        />
        </div>
        <div className="form-group">
          <label>Password</label>
        <input type="password" 
        name="password" 
        value={login.password}
        onChange={update}
        placeholder="Enter password" className="form-control"
        disabled={isLoading}
        />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>{isLoading ? "Submitting...": "Submit"}</button>
      </form>
    </>
  )
}
