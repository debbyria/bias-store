import { GET_CATEGORIES_SUCCESS } from "../actions/actionType";

const initialState = {
  categories: []
}

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer