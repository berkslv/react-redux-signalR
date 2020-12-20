import { combineReducers } from 'redux'
import chatReducer from "./chat/chatReducer"

const rootReducer = combineReducers({
  chat:chatReducer
})

export default rootReducer
