const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an overall architecture is like building a house without a foundation.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const increaseVoteOf = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    payload: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      id: getId(),
      votes: 0,
    }
  }
}

const listAnecdote = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(listAnecdote)

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.payload]
    case 'VOTE_ANECDOTE': {
      const id = action.payload.id
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      const updatedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
    
      return state.map(anecdote =>
        anecdote.id === id ? updatedAnecdote : anecdote
      )
    }
    default: return state
  }
}

export default anecdoteReducer