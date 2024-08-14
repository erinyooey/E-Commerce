import {useNavigate} from "react-router-dom"
import { useState } from "react"
// using module css
import styles from "./Login.module.css"

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const update = (e) => {
    e.preventDefault()
    setLogin((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // submitting the form
  const submit = (e) => {
    e.preventDefault()
    try {
      let submission = false;
      // submission = await 
    } catch (error) {
      console.log(error)
    }
    console.log(login)
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
        />
        </div>
        <div className="form-group">
          <label>Password</label>
        <input type="password" 
        name="password" 
        value={login.password}
        onChange={update}
        placeholder="Enter password" className="form-control"
        />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
