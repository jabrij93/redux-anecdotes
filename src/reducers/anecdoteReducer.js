import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload
      state.push({
        content : anecdote,
        votes: 0,
        id: getId()
      })
    },
    increaseVoteOf(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = { 
        ...anecdoteToVote, 
        votes: anecdoteToVote.votes + 1
      }

      console.log("NOW CURRENT",current(state))

      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )     
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, increaseVoteOf, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer

// export const increaseVoteOf = (id) => {
//   return {
//     type: 'VOTE_ANECDOTE',
//     payload: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       id: getId(),
//       votes: 0,
//     }
//   }
// }

// const anecdoteReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload]
//     case 'VOTE_ANECDOTE': {
//       const id = action.payload.id
//       const anecdoteToVote = state.find(anecdote => anecdote.id === id)
//       const updatedAnecdote = {
//         ...anecdoteToVote,
//         votes: anecdoteToVote.votes + 1
//       }
    
//       return state.map(anecdote =>
//         anecdote.id === id ? updatedAnecdote : anecdote
//       )
//     }
//     default: return state
//   }
// }

// export default anecdoteReducer