import { createStore, combineReducers, applyMiddleware } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/fiterReducer'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'

import {composeWithDevTools} from "redux-devtools-extension"

const reducer = combineReducers({
  filter:filterReducer,
  notification: notificationReducer,
  anecdotes: anecdoteReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store