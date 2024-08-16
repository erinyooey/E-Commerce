import { useEffect, useState } from "react"
import {useGetShoesQuery} from "./ShoesSlice"

export default function Shoes() {

  const {data, error, isLoading} = useGetShoesQuery()
  // const [input, setInput] = useState("")
  const [showShoes, setShowShoes] = useState(false)

  useEffect(()=> {
    const fetchShoes = async() => {
      try {
        setShowShoes(true)
      } catch (error) {
        console.error("Error in fetching shoes: ", error)
      }
    };
    fetchShoes()
  }, [])

  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Shoes</h1>
      <div>

      </div>
    </div>
  )
}
