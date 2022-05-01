import { REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS } from "./actionType"
// import { fetchProducts } from "./productAction"
// import { browserHistory } from "react-router"

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
      // console.log(response.data)
      console.log(result);

      // swal success
      if (!response.ok) {
        throw new Error(result.errors)
      }
      // let navigate = useNavigate()
      // navigate("/login")
      // browserHistory.push('/login')
      // dispatch(fetchProducts())
    } catch (err) {
      // swal error
      console.log(err)
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
      // console.log(result)

      localStorage.setItem("access_token", result.access_token)

      if (!response.ok) {
        throw new Error(result.errors)
      }

    } catch (err) {
      console.log(err)
    }
  }
}