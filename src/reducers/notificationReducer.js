import { createSlice, current } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions
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