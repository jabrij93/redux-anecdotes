import { useSelector, useDispatch } from 'react-redux'
import { increaseVoteOf } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  })
      
  const dispatch = useDispatch()

  const vote = (id) => {
      dispatch(increaseVoteOf(id))
  }

  return (
    <div>
        {[...anecdotes]
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
      )}
    </div>
  )
}

export default AnecdoteList