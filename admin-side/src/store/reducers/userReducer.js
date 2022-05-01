import { LOGIN_USER_SUCCESS } from "../actions/actionType"

const initialState = {
  // userData: {
  //   username: "",
  email: "",
  // password: "",
  // phoneNumber: "",
  // address: ""
  // },
  access_token: ""
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    // case REGISTER_USER_SUCCESS:
    //   return {
    //     ...state,
    //     email: action.payload
    //   }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        access_token: action.payload.access_token
      }
    default:
      return state
  }
}

export default userReducer