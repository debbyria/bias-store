import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer"
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  category: categoryReducer
})

export default rootReducer