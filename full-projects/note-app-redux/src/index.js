import ReactDOM from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'
import { Provider } from 'react-redux'

const store = createStore(noteReducer)
console.log(store.getState());



const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    
    , document.getElementById('root'), () => {
      console.log("app rendered");
    })
}

renderApp()
store.subscribe(renderApp)