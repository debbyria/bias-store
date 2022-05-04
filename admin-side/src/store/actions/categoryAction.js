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
      let response = await fetch('https://bias-store.herokuapp.com/categories', {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      if (!response.ok) {
        throw new Error(response.message)
      }

      const data = await response.json()

      dispatch(getCategoriesSuccess(data))

    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://bias-store.herokuapp.com/categories/${id}`, {
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

      return 'success'
    } catch (err) {
      return err
    }
  }
}

export const addCategory = (data) => {
  return async (dispatch) => {
    try {
      let response = await fetch('https://bias-store.herokuapp.com/categories/add', {
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
      return 'success'
    } catch (err) {
      return err
    }
  }
}