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
      let response = await fetch('http://localhost:3001/products', {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })

      if (!response.ok) {
        throw new Error(response.message)
      }

      const data = await response.json()
      console.log(data)
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
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.getItem("access_token")
        }
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

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/products/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.getItem("access_token")
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error(response.message)
      }

      fetchProducts()
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export const getDetailProduct = (slug) => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/products')
    } catch (err) {
      console.log(err)
    }
  }
}
