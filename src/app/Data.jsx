import {useEffect, useState} from 'react'
import axios from 'axios'

const Data = () => {
    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async() => {
        try {
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


  return (
    <div>
        {data.map((item)=> (
            <div key={item.id}> 
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <img src={item.pictureUrl} alt={item.name} style={{width: "200px", height: "auto"}} />
                <p>{item.description}</p>
                <p>{item.isAvailable ? "Available": "Out of Stock"}</p>
            </div> 
            ))}
    </div>
  )
}


export default Data