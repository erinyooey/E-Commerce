import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Navigation/Nav'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Account from './Components/Account'
import Shoes from './Components/Shoes/Shoes'
import ShoeDetail from './Components/ProductDetail/ShoeDetail'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  return (
    <>
    <Router>
      < Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/products' element={<Shoes />}></Route>
        <Route path='/products/:id' element={<ShoeDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
