import {configureStore} from '@reduxjs/toolkit'

import {
    getAllProductReducer,
    getCategoriesReducer,
    getProductByCategoryReducer,
    getAllBrandsReducer,
} from './Reducers/Product'

const store = configureStore({
    reducer:{
        allProducts:getAllProductReducer,
        categories:getCategoriesReducer,
        productsByCategory:getProductByCategoryReducer,
        allBrands:getAllBrandsReducer,
    },
})

export default store;