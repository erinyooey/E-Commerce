import {useNavigate} from "react-router-dom"
import { useState } from "react"
// using module css
import styles from "./Login.module.css"

export default function Login() {
  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form>
        <div className="form-group">
          <label>Email</label>
        <input 
        type="email" name="email" 
        placeholder="Enter Email"
        className="form-control"
        />
        </div>
        <div className="form-group">
          <label>Password</label>
        <input type="password" 
        name="password" 
        placeholder="Enter password" className="form-control"
        />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
