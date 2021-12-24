import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './store';




// console.log(store.getState());
// noteService.getAll().then(notes => {
//     store.dispatch(initializeNotes(notes))
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'), () => {
    console.log("app rendered");
  })

