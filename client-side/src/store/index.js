import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers/rootReducers'
import thunk from 'redux-thunk'

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store