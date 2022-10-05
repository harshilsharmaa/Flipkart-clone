import React, { useState, useEffect } from 'react'
import './FilterSection.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getAllProducts, getProductByCategory, getAllBrands, getProductsByBrand } from '../../Actions/Product'
import ProductSection from '../ProductSection/ProductSection'


export const FilterSection = ({ categoryId, categoryName }) => {

  const { allProducts, totalPages:allProductPages, loading: allProductsLoading } = useSelector(state => state.allProducts)
  const { productsByCategory, totalPages:productsByCategoryPages, loading: productsByCategoryLoading } = useSelector(state => state.productsByCategory)
  const { allBrands, loading: allBrandsLoading } = useSelector(state => state.allBrands)


// Complete the functions or add your own
  const handleBrand = (e, name) => {
    
  }

  const handleRating = (e, value) => {

  }

  const handleDisscount = (e, value) => {
  
  }


  return (
    <div className='filter-section'>
      <h4>Add Filters here</h4>
    </div>
  )
}

export default FilterSection