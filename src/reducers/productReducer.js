// component using to handle the product reducer
//maintain comments and code formatting in each function and components

import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS } from "../constants/productConst";


export const productReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:

            return {
                loading: true,
                ...state,
            }
        case ALL_PRODUCT_SUCCESS:

            return {
                loading: false,
                product: action.payload.products,

            }
        case ALL_PRODUCT_FAIL:

            return {
                loading: false,
                error: action.payload,
            }
       
        default:
            return state;
    }
};
