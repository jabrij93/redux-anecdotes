import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    console.log("anecdoteList", anecdotes)
    return anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  })
          
  const dispatch = useDispatch()

  const vote = (id, content) => {
      dispatch(voteAnecdote(id))
      dispatch(setNotification(`you've voted - ${content} !`))

      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000) // Clear after 5 seconds (5000 milliseconds)      
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
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
      )}
    </div>
  )
}

export default AnecdoteList