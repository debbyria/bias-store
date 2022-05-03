import { FETCH_PRODUCTS_SUCCESS, GET_DETAIL_SUCCESS } from "./actionType"

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

      return 'success'

    } catch (err) {
      return err
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
        let result = await response.json()
        throw new Error(result)
      }

      dispatch(fetchProducts())
      return 'success'
    } catch (error) {
      return error
    }
  }
}

export const getDetailSuccess = (payload) => {
  return {
    type: GET_DETAIL_SUCCESS,
    payload
  }
}

export const getDetailProduct = (slug) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/products/${slug}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.getItem("access_token")
        }
      })
      let data = await response.json()

      dispatch(getDetailSuccess(data))
      if (!response.ok) {
        throw new Error(response.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateProduct = (id, data) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.getItem("access_token")
        },
        body: JSON.stringify(data)
      })

      let result = await response.json()

      if (!response.ok) {
        throw new Error(result.message)
      }

      dispatch(fetchProducts())
      return 'success'
    } catch (err) {
      return err
    }
  }
}