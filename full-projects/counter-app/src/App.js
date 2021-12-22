
const App = ({store}) => {

  return (
    <div>
      <ul>
      {store.getState().map(note =>
        (<li>{ note.content}</li>)
        )}
      </ul>
    </div>
  )
}

export default App