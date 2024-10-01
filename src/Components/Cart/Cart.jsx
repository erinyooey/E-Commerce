import React from 'react'
import styles from "../Login/Login.module.css"
import { useEffect, useState } from 'react'
import {useShowCartQuery} from "./CartSlice"

export default function Cart() {

  const {data, error, isLoading} = useShowCartQuery()

  console.log("Data: ", data)

  const [showCart, setShowCart] = useState(false)



  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }


  return (
    <div>
      <h1 className={styles.title}>
      My Bag
      </h1>
      <div>
        {data.cartItems.map((item)=> (
          <div key={item.id}></div>
        ))}
      </div>
    </div>
  )
}
