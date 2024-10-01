import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
// using module css
import styles from './Home.module.css'
import search from '../../assets/search.svg'
import { useAddToCartMutation, useCreateCartMutation, useUpdateCartMutation } from '../Cart/CartSlice'

export default function Home() {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [cart, setCart] = useState([])
  const [createCart] = useCreateCartMutation()
  const [addToCart] = useAddToCartMutation()
  const [updateCart] = useUpdateCartMutation()

  const handleAddCart = async (item) => {
    // check if user is logged in
    const isLoggedIn = !!sessionStorage.getItem("token")
    
    if(isLoggedIn){
      try {
        // check if user has a cart else create a new cart
        await createCart()

        // check if item is already in cart
        const exist = cart.find(cartItem => cartItem.id === item.id)
    
        if(exist){
          // update quantity in the backend
          const response = await updateCart({cartId: exist.cartId,
            productId: item.id,
            quantity: exist.quantity + 1})

          
          console.log("Number 1")
          // update cart state in the frontend
          const updatedCart = cart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: response.quantity} : cartItem)
          setCart(updatedCart)
          console.log("Number 2")
        } else {
          // add item to the cart in the backend
          console.log("Number 2.1")
          // const response = await axios.post("http://localhost:3000/api/cart/add", {
          //   productId: item.id,
          //   quantity: 1
          // })
          const response = await addToCart({productId: item.id, quantity: 1}).unwrap()

          console.log("Number 3", response)
          const newCartItem = {...item, quantity: response.quantity, cartId: response.cartId}
          setCart([...cart, newCartItem])
          console.log("Number 4")
        }
        alert(`${item.name} has been added to your cart`)
      } catch (error) {
        console.error("Error adding to cart: ", error)
        alert("Failed to add item to cart")
      }
    } else {
      alert("Please log in to add items to your cart")
      navigate('/login')
    }
  }
  
  // Display Data from Backend!
    const getData = async() => {
        try {
            // takes a long time to load with deployed url
            // const response = await axios.get(`${baseUrl}/api/products/`)
            const response = await axios.get("http://localhost:3000/api/products/")
            console.log("Response data: ", response.data)
            if(Array.isArray(response.data)){
                setData(response.data)
            } else{
                setError("Unexpected response format")
            }
        } catch (error) {
            console.error("Error fetching data: ", error)
            setError("Error")
        } finally{
            setLoading(false)
        }
    }


    useEffect(()=> {
        getData()
    }, [])

    if(loading) {
        return <div>Loading..</div>
    }
    if(error){
        return <div>{error}</div>
    }

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  // Handling the "enter" key
  const handleSearchKeyDown = (event) => {
    if(event.key === "Enter"){
      console.log("Enter key pressed")
    }
  }

  const handleSearchClick = () => {
    console.log("Search button clicked")
  }

  // Filtered products based on search query
  const filteredData = data.filter(item => item && item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
  const handleCardClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <input type="text" 
        placeholder='Search'
        value={searchQuery} //
        onChange={handleSearch} // update search query on input change
        onKeyDown={handleSearchKeyDown}
        className={styles.searchInput}/>
        <button type='button' className={styles.search} onClick={handleSearchClick}>  
        <img src={search} alt="" className={styles.searchIcon}/>
        </button>
      </div>
      <div className={styles.data}>
        {(searchQuery ? filteredData : data).map((item)=> (
            <div key={item.id} 
            className={styles.item}
            onClick={()=> handleCardClick(item.id)} style={{cursor: "pointer"}}> 
                <h3 className={styles.name}>{item.name} </h3>
                <p className={styles.price}>${item.price} </p>
                <img src={item.pictureUrl} alt={item.name} className={styles.itemImage} style={{width: "200px", height: "auto"}} />
                <p className={styles.itemDescription}>{item.description} </p>
                <p className={
                  `${styles.itemAvailability} ${item.isAvailable ? styles.available : styles.outOfStock}`}>
                  {item.isAvailable ? "Available" : "Out of Stock"}
                </p>
           
                <button 
                onClick={(e) => {
                  e.stopPropagation() // prevent link from navigating when button is clicked
                  handleAddCart(item)
                }}
                disabled={!item.isAvailable}
                className={styles.addCart}
                >
                  Add to Cart
                </button>
            </div> 
        ))}
      </div>
    </div>
  )
}
