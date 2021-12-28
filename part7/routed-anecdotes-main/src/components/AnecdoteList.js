import Anecdote from "./Anecdote"

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote}/>)}
    </ul>
  </div>
)
export default AnecdoteList