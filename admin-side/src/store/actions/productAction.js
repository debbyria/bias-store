import { FETCH_PRODUCTS_SUCCESS } from "./actionType"

export const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  }
}
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/products')

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

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error(response.message)
      }
      dispatch(fetchProducts())

    } catch (err) {
      console.log(err)
    }
  }
}