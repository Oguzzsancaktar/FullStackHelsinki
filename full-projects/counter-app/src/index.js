import ReactDOM from "react-dom"
import { createStore } from "redux"
import App from "./App"
import noteReducer from "./reducers/noteReducer"


const store = createStore(noteReducer)
store.dispatch(
  {
    type: 'NEW_NOTE',
    data: {
      content: "Test for reducer note content",
      important: true,
      id:1
    }
  }
)

const renderApp = () => {
  ReactDOM.render(
    <App store={store}/>, document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)