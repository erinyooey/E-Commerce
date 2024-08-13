import { Link } from "react-router-dom"
import "../../App.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
      <ul className={styles.menu}>
        <Link to="/" className={styles.navlink}>
          <h4>Home</h4>
        </Link>
        <Link to="/account" className={styles.navlink}>
          <h4>Account</h4>
        </Link>
        <Link to="/login" className={styles.navlink}>
          <h4>Login</h4>
        </Link>
        <Link to="/products/:id" className={styles.navlink}>
          <h4>Products</h4>
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
