import { GET_CATEGORIES_SUCCESS } from "./actionType"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const getCategoriesSuccess = (payload) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload
  }
}

export const getCategories = () => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/categories', {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      if (!response.ok) {
        MySwal.fire({
          icon: "error"
        })
        throw new Error(response.message)
      }

      const data = await response.json()

      dispatch(getCategoriesSuccess(data))
    } catch (err) {
      MySwal.fire({
        icon: "error"
      })
      console.log(err)
    }
  }
}

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/categories/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.getItem("access_token")
        }
      })

      if (!response.ok) {
        throw new Error(response.message)
      }
      dispatch(getCategories())

    } catch (err) {
      console.log(err)
    }
  }
}

export const addCategory = (data) => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/categories/add', {
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
      getCategories()
    } catch (err) {
      MySwal.fire({
        icon: "error",
        text: "Name is required"
      })
    }
  }
}