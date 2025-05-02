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
    },
    updateAnecdote(state, action) {
      const updated = action.payload
      return state.map(anecdote => anecdote.id !== updated.id ? anecdote : updated)
    }
  },
})

export const { increaseVoteOf, appendAnecdote, setAnecdotes, updateAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => async (dispatch, getState) => {
  const state = getState().anecdotes
  const anecdote = state.find(a => a.id === id)
  const updated = {
    ...anecdote,
    votes: anecdote.votes + 1
  }

  const returned = await anecdoteService.updateVotes(updated)
  dispatch(updateAnecdote(returned))
}

export default anecdoteSlice.reducer