const notificationReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.payload
      case 'CLEAR_NOTIFICATION':
        return ''
      default:
        return state
    }
  }
  
  export const setNotification = (content) => {
    return {
      type: 'SET_NOTIFICATION',
      payload: content,
    }
  }
  
  export const clearNotification = () => {
    return {
      type: 'CLEAR_NOTIFICATION',
    }
  }
  
  export default notificationReducer
  