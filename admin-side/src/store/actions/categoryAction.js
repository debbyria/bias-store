import { GET_CATEGORIES_SUCCESS } from "./actionType"

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
        throw new Error(response.message)
      }

      const data = await response.json()
      console.log(data)
      dispatch(getCategoriesSuccess(data))
    } catch (err) {
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