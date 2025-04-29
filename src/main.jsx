  import ReactDOM from 'react-dom/client'
  import { configureStore, combineReducers } from '@reduxjs/toolkit'
  import { Provider } from 'react-redux'
  import App from './App'
  import anecdoteService from './services/anecdotes'
  import anecdoteReducer, { appendAnecdote } from './reducers/anecdoteReducer'
  import filterReducer from './reducers/filterReducer'
  import notificationReducer from './reducers/notificationReducer'

  const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  })

  const store = configureStore({
    reducer: reducer
  })

  anecdoteService.getAll().then(anecdotes =>
    anecdotes.forEach(anecdote => {
      store.dispatch(appendAnecdote(anecdote))
    })
  )

  store.subscribe(() => console.log(store.getState()))

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  )