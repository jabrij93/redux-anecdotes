import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import { setNotification, clearNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote.content))
    console.log('NEW-ANECDOTE', newAnecdote) // Check that `newAnecdote.content` is a string

    dispatch(setNotification(content))

    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000) // Clear after 5 seconds (5000 milliseconds)
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    </div>
  )
}

export default AnecdoteForm