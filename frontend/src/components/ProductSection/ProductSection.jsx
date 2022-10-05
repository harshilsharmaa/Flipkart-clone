import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProductSection.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductSection = ({categoryName,products}) => {
  
  const [productsList, setProductsList] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])

 

  return (
    <div className='product-section'>
    
    </div>
  )
}

export default ProductSection