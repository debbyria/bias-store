import { FETCH_PRODUCTS_SUCCESS, GET_DETAIL_SUCCESS } from "./actionType"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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
        let result = await response.json()
        throw new Error(result)
      }
      MySwal.fire({
        icon: "success",
        text: "Succeed add new product"
      })
    } catch (error) {
      MySwal.fire({
        icon: "error",
        text: error
      })
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

      console.log(data)
      if (!response.ok) {
        throw new Error(response.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
