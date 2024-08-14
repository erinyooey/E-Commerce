import { useState } from "react"
// using module css
import styles from '../Login/Login.module.css'


export default function Register() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const update = (e) => {
    e.preventDefault()
    setRegister((prev)=>({
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
    console.log(register)
  }

  return (
    <div>
      <h1 className={styles.title}>Register</h1>
      <form onSubmit={submit}>
      <div className="form-group">
          <label>First Name</label>
        <input 
        type="text" 
        name="firstName" 
        value={register.firstName}
        onChange={update}
        placeholder="First Name"
        className="form-control"
        />
        </div>
        <div className="form-group">
          <label>Last Name</label>
        <input 
        type="text" 
        name="lastName" 
        value={register.lastName}
        onChange={update}
        placeholder="Last Name"
        className="form-control"
        />
        </div>
      <div className="form-group">
          <label>Email</label>
        <input 
        type="email" 
        name="email" 
        value={register.email}
        onChange={update}
        placeholder="Enter Email"
        className="form-control"
        />
        </div>
        <div className="form-group">
          <label>Password</label>
        <input type="password" 
        name="password" 
        value={register.password}
        onChange={update}
        placeholder="Enter password" className="form-control"
        />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
