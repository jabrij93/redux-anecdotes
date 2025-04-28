import { createSlice, current } from '@reduxjs/toolkit'

  const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      filterChange(state, action) {
        return action.payload
      },
    }
  })

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer
  
// const filterReducer = (state = '', action) => {
//     console.log('ACTION: ', action)

//     switch (action.type) {
//         case 'SET_FILTER':
//           return action.payload
//         default:
//           return state
//       }
//   }
  
//   export const filterChange = filter => {
//     return {
//       type: 'SET_FILTER',
//       payload: filter,
//     }
//   }

  // const anecdoteSlice = createSlice({
  //   name: 'anecdotes',
  //   initialState,
  //   reducers: {
  //     createAnecdote(state, action) {
  //       const anecdote = action.payload
  //       state.push({
  //         content : anecdote,
  //         votes: 0,
  //         id: getId()
  //       })
  //     },
  //     increaseVoteOf(state, action) {
  //       const id = action.payload
  //       const anecdoteToVote = state.find(n => n.id === id)
  //       const changedAnecdote = { 
  //         ...anecdoteToVote, 
  //         votes: anecdoteToVote.votes + 1
  //       }
  
  //       console.log("NOW CURRENT",current(state))
  
  //       return state.map(anecdote =>
  //         anecdote.id !== id ? anecdote : changedAnecdote
  //       )     
  //     }
  //   },
  // })

  // export const { createAnecdote, increaseVoteOf } = anecdoteSlice.actions
  // export default anecdoteSlice.reducer
  
  // export default filterReducer