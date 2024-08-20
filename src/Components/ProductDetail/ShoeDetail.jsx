import { useParams } from 'react-router'
import homeStyles from "../Home/Home.module.css"
import { useSingleProductQuery } from './SingleShoeSlice'
import styles from './Shoe.module.css'; 

export default function ShoeDetail() {
  const {id} = useParams() // get product id from url
  const {data: product, error, isLoading} = useSingleProductQuery(id)
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;


  return (
    <div className={styles.productDetail}>
      {product && (
        <div className={styles.item}>
          <h2 className={homeStyles.name}>{product.name}</h2>
          <img className={homeStyles.itemImage} src={product.pictureUrl} alt={product.name} style={{width: '300px', height: 'auto'}} />
          <p className={homeStyles.itemDescription}>{product.description}</p>
          <p className={homeStyles.price}>Price: ${product.price}</p>
          <p
            className={`${homeStyles.itemAvailability} ${product.isAvailable ? homeStyles.available : homeStyles.outOfStock}`}
          >
            {product.isAvailable ? 'Available' : 'Out of Stock'}</p>
            
        </div>
      )}
    </div>
  )
}
