import {createReducer} from '@reduxjs/toolkit';

const initialState = {};

export const getAllProductReducer = createReducer(initialState, {
    allProductsRequest: (state) => {
        state.loading = true;
    },
    allProductsSuccess: (state, action) => {
        state.loading = false;
        state.allProducts = action.payload.products;
        state.totalPages = action.payload.totalPages;
    },
    allProductsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state)=>{
        state.error = null;
    },

    clearMessage: (state)=>{
        state.message = null;
    },
    clearAllProducts: (state)=>{
        state.allProducts = null;
    },
    clearPages: (state)=>{
        state.totalPages = null;
    }
})


export const getCategoriesReducer = createReducer(initialState, {
    categoriesRequest: (state) => {
        state.loading = true;
    },
    categoriesSuccess: (state, action) => {
        state.loading = false;
        state.categories = action.payload;
    },
    categoriesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state)=>{
        state.error = null;
    },
    clearMessage: (state)=>{
        state.message = null;
    }
})

export const getProductByCategoryReducer = createReducer(initialState, {
    productsByCategoryRequest: (state) => {
        state.loading = true;
    },
    productsByCategorySuccess: (state, action) => {
        state.loading = false;
        state.productsByCategory = action.payload.products;
        state.totalPages = action.payload.totalPages;
    },
    productsByCategoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state)=>{
        state.error = null;
    },
    clearMessage: (state)=>{
        state.message = null;
    },
    clearProductsByCategory: (state)=>{
        state.productsByCategory = null;
    },
    clearPages: (state)=>{
        state.totalPages = null;
    }
})

export const getAllBrandsReducer = createReducer(initialState, {
    allBrandsRequest: (state) => {
        state.loading = true;
    },
    allBrandsSuccess: (state, action) => {
        state.loading = false;
        state.allBrands = action.payload;
    },
    allBrandsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
})
