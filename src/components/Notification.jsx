import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector((state) => state.notification)

    if (!notification) {
      return null // Don't show anything if there's no notification
    }
          
    const style = {
      border: 'solid',
      padding: 10, 
      borderWidth: 1
    }
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  
  export default Notification