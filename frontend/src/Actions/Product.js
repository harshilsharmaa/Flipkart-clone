import axios from 'axios';

const rootUrl = "";  // Add your backend url here or leave it empty if you are running backend and frontend on localhost


// This function is used to get all the products from the backend
// Take reference from this function to create other functions
export const getCategories = () => async (dispatch) => {

    try {

        // Dispatching the request
        dispatch({
            type: 'categoriesRequest'
        })

        // Fetching the data
        const { data } = await axios.get(`${rootUrl}/api/v1/category/get`);

        // Dispatching the success
        dispatch({
            type: 'categoriesSuccess',
            payload: data.categories
        })


    } catch (error) {
        // Dispatching the failure
        dispatch({
            type: 'categoriesFailure',
            payload: error.message
        })
    }
}

// Get all products with all filters applied
export const getAllProducts = (brand, rating, disscount, page) => async (dispatch) => {

    try {

        /* Your Code
         - 
         - 
        */

    } catch (error) {
        dispatch({
            type: 'allProductsFailure',
            payload: error.message
        })
    }
}


// Get Products by Category with all filters applied
export const getProductByCategory = (categoryId, brand, rating,disscount, page) => async (dispatch) => {

    try {

        /* Your Code
         - 
         - 
        */ 

    }
    catch (error) {
        dispatch({
            type: 'productsByCategoryFailure',
            payload: error.message
        })
    }
}

// Get all Brands
export const getAllBrands = () => async (dispatch) => {

    try {

        /* Your Code
         - 
         - 
        */ 

    } catch (error) {
        dispatch({
            type: 'allBrandsFailure',
            payload: error.message
        })
    }
}

export const getProductsByBrand = (brand) => async (dispatch) => {

    try {

         /* Your Code
         - 
         - 
        */ 

    }
    catch (error) {
        dispatch({
            type: 'productsByBrandFailure',
            payload: error.message
        })
    }
}