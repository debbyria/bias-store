import { REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS } from "./actionType"

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
          'access_token': localStorage.getItem("access_token")
        },
        body: JSON.stringify(data)
      })
      let result = await response.json()

      if (!response.ok) {
        throw new Error(result.errors)
      }

      return 'success'
    } catch (err) {
      return err
    }
  }
}

export const postLoginUser = (data) => {
  return async () => {
    try {
      let response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      let result = await response.json()

      if (!response.ok) {
        throw new Error(result.errors)
      }

      localStorage.setItem("access_token", result.access_token)

      return 'success'
    } catch (err) {
      return err
    }
  }
}