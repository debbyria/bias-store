import { configureStore as createStore } from 'redux'

const initialState = {
  products: []
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "products/fetchSuccess":
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }

}

let store = createStore(productReducer)

export default store