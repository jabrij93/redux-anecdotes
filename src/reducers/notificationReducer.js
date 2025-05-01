import { createSlice, current } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotificationMessage(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { clearNotification, setNotificationMessage } = notificationSlice.actions

let timeoutId

export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch(setNotificationMessage(message))

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer

// const notificationReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_NOTIFICATION':
//       return action.payload
//     case 'CLEAR_NOTIFICATION':
//       return ''
//     default:
//       return state
//   }
// }
  
// export const setNotification = (content) => {
//   return {
//     type: 'SET_NOTIFICATION',
//     payload: content,
//   }
// }
  
// export const clearNotification = () => {
//   return {
//     type: 'CLEAR_NOTIFICATION',
//   }
// }
  
// export default notificationReducer 