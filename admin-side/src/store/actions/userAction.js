import { REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS } from "./actionType"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const registerUserSuccess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload
  }
}

export const loginUserSuccess = (payload) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload
  }
}

export const postRegisterUser = (data) => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      let result = await response.json()

      if (!response.ok) {
        throw new Error(result.errors)
      }
      MySwal.fire({
        icon: "success",
        text: "Succeed add new user"
      })
    } catch (err) {
      MySwal.fire({
        icon: "error",
        text: err
      })
    }
  }
}

export const postLoginUser = (data) => {
  return async (dispatch) => {
    try {
      let response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      let result = await response.json()

      if (result.access_token) {
        localStorage.setItem("access_token", result.access_token)
      }

      if (!response.ok) {
        throw new Error(result.errors)
      }
      MySwal.fire({
        icon: "success",
        title: 'Succeed Login',
      })

    } catch (err) {
      MySwal.fire({
        icon: "error",
        text: err
      })
    }
  }
}