import { Link } from "react-router-dom"
import "../../App.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import title from '../../assets/title.svg'
import logo from '../../assets/logo.svg'
import xlogo from '../../assets/x-logo.svg'

// using module css
import styles from './Nav.module.css'

export default function Nav() {
  const navigate = useNavigate()
  // const [selectedProduct, setSelectedProduct] = useState("")

  // const handleSearch = (e) => {
  //   e.preventDefault()
  // }


  return (
    <div className={styles.navbar}>
      <div className={styles.logoGroup}>
        <img src={title} alt="logoTitle" className={styles.logoTitle}/>
        <img src={xlogo} alt="xlogo" className={styles.xlogo}/>
      </div>
      <ul className={styles.menu}>
        <Link to="/" className={styles.navlink}>
          <h4>Home</h4>
        </Link>
        <Link to="/register" className={styles.navlink}>
          <h4>Register</h4>
        </Link>
        <Link to="/login" className={styles.navlink}>
          <h4>Login</h4>
        </Link>
        <Link to="/cart" className={styles.navlink}>
          <h4>Cart</h4>
        </Link>
      </ul>
      <section>
        {/* <form onSubmit={handleSearch}>

        </form> */}
      </section>
    </div>
  )
}
