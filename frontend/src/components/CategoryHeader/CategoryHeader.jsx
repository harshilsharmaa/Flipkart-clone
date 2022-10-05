import React, { useEffect,useState } from 'react'
import './CategoryHeader.css'
import {getCategories} from '../../Actions/Product'
import {useDispatch, useSelector} from 'react-redux'
import FilterSection from '../FilterSection/FilterSection'

const CategoryHeader = () => {

    const {categories, loading} = useSelector(state => state.categories);

    const [categoryId, setCategoryId] = useState(0);
    const [categoryName, setCategoryName] = useState('');

    const dispatch = useDispatch();


    const handleClick = (id,name) => {

    }


  return (
    <>
    <div className='categoryHeader'>
      <h6>Categories header (example: Electronics, Men, Fashion etc.)</h6>
    </div>
    {
      loading ? <div style={{width: "5rem", height: "5rem"}}  className="spinner-border text-primary center" role="status" />:
      <FilterSection categoryId={categoryId} categoryName={categoryName}/>
    }
    </>
  )
}

export default CategoryHeader