import { Link } from "react-router-dom"

const Anecdote = ({ anecdote }) => {
  console.log(1, anecdote);
  return (
    <Link to={`/anecdotes/${anecdote.id}`}>
      <li>{anecdote.content}</li>
    </Link>
  )
}

export default Anecdote