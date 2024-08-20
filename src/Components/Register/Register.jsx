import { useState } from "react"
// using module css
import styles from '../Login/Login.module.css'
import { useRegisterMutation } from "./RegisterSlice"
import { useNavigate } from "react-router"


export default function Register() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState(null)
  const[registerMutation, {isLoading}] = useRegisterMutation()
  const navigate = useNavigate()

  const update = (e) => {
    e.preventDefault()
    setRegister((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // submitting the form
  const submit = async (e) => {
    e.preventDefault()
    try {
      const response = await registerMutation(register).unwrap()
      if(response.token){
        navigate("/login")
      } else{
        console.error("Registration incomplete: ", response.message)
      }
    } catch (error) {
      console.error("Registration failed: ", error)
      setError(error?.data?.message || "Registration failed")
    }
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
        disabled={isLoading}
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
        disabled={isLoading}
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
        disabled={isLoading}
        />
        </div>
        <div className="form-group">
          <label>Password</label>
        <input type="password" 
        name="password" 
        value={register.password}
        onChange={update}
        placeholder="Enter password" className="form-control"
        disabled={isLoading}
        />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>{isLoading ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  )
}
