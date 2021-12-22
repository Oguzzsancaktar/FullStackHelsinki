import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data)
      break;
  
    default:
      break;
  }

  return state
}



const store2 = createStore(noteReducer)
const store = createStore(counterReducer)

store2.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: "new note from store",
    important: true,
    id:1
}
})

const App = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <button 
        onClick={e => store.dispatch({ type: 'INCREMENT' })}
      >
        plus
      </button>
      <button
        onClick={e => store.dispatch({ type: 'DECREMENT' })}
      >
        minus
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'ZERO' })}
      >
        zero
      </button>

      <div>
        <h2>Notes</h2>
        <ul>

        {
          store2.getState().map(note => (
            <li> {note.content} </li>
          ))
          }
        </ul>
          
      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store2.subscribe(renderApp)
store.subscribe(renderApp)