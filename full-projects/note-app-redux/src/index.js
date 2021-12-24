import ReactDOM from 'react-dom'
import App from './App'

import { createStore, combineReducers } from 'redux'
import noteReducer from './reducers/noteReducer'
import { Provider } from 'react-redux'
import filterReducer from './reducers/filterReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
const store = createStore(reducer, composeWithDevTools())

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'), () => {
    console.log("app rendered");
  })

