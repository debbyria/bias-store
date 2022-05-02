import { FETCH_PRODUCTS_SUCCESS, GET_DETAIL_SUCCESS } from "../actions/actionType";

const initialState = {
  products: [],
  detailProduct: {}
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      }
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        detailProduct: action.payload
      }
    default:
      return state
  }

}

export default productReducer