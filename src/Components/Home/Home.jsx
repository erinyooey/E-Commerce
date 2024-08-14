import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
// using module css
import styles from './Home.module.css'
import search from '../../assets/search.svg'

export default function Home() {
  const navigate = useNavigate()

  const handleSearch = () => {
    console.log('Search triggered')
  }
  
  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <input type="text" placeholder='Search' className={styles.searchInput}/>
        <button type='button' className={styles.search} onClick={handleSearch}>  
        <img src={search} alt="" className={styles.searchIcon}/>
        </button>
      </div>
    </div>
  )
}
