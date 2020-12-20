import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import socketMiddleware from './chat/socketMiddleware'
import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  // NOTE as you can see, socketMiddleware added to this method.
  composeWithDevTools(applyMiddleware(socketMiddleware, logger, thunk))
)

export default store
