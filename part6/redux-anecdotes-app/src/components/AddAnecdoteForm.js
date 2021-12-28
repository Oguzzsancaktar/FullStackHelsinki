import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from "../services/anecdote"

const AddAnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitAnecdote = async(e) => {
    e.preventDefault()
    const content = e.target.content.value
    e.target.content.value = ''
    const newAnecdote = await anecdoteService.add(content)
    dispatch(addAnecdote(newAnecdote))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={submitAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AddAnecdoteForm