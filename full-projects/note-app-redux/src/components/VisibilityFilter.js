import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const filterSelected = (filter) => {
    dispatch(setFilter(filter))
  }

  return (
    <div>
      all <input type="radio" onChange={() => filterSelected('ALL')} name="filter" />
      important <input type="radio" onChange={() => filterSelected('IMPORTANT')} name="filter" />
      nonimportant <input type="radio" onChange={() => filterSelected('NONIMPORTANT')} name="filter" />
    </div>

  )
}

export default VisibilityFilter