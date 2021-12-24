import {useDispatch} from 'react-redux'
import { filterAnecdote } from '../reducers/fiterReducer'
const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const filter = e.target.value
    dispatch(filterAnecdote(filter))
  }
  
  const style = {
    marginBottom:10
  }
  return (
    <div style={style}>
      Filter
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Filter
