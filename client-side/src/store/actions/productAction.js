import { FETCH_PRODUCTS_SUCCESS, GET_DETAIL_SUCCESS } from "./actionType"

export const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  }
}

export const getDetailSuccess = (payload) => {
  return {
    type: GET_DETAIL_SUCCESS,
    payload
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      let response = await fetch('https://bias-store.herokuapp.com/public/products')

      if (!response.ok) {
        throw new Error(response.message)
      }

      const data = await response.json()
      dispatch(fetchProductsSuccess(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getDetailProduct = (slug) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://bias-store.herokuapp.com/public/products/${slug}`)
      let data = await response.json()
      console.log("masuk 41")
      dispatch(getDetailSuccess(data))
      if (!response.ok) {
        throw new Error(response.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
}