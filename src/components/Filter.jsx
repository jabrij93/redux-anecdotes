import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(filterChange(event.target.value))
  }

  // const handleChange = (event) => {
  //   // input-field value is in variable event.target.value
  // }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter

// const Filter = () => {
//   const dispatch = useDispatch()

//   return (
//     <div>
//       all    
//       <input 
//         type="radio" 
//         name="filter" 
//         onChange={() => dispatch(filterChange('ALL'))}
//       />
//       important   
//       <input
//         type="radio"
//         name="filter"
//         onChange={() => dispatch(filterChange('IMPORTANT'))}
//       />
//       nonimportant 
//       <input
//         type="radio"
//         name="filter"
//         onChange={() => dispatch(filterChange('NONIMPORTANT'))}
//       />
//     </div>
//   )
// }

// export default Filter