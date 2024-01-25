import { useState, createContext } from "react";

const Notification = ({ message, severity }) => {
    const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 10,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'success' ? 'green' : 'red',
      color: 'white',
      padding: '10px 20px 10px 20px',
			zIndex: 1
    }
  
    // if(message === '') return
    if(message !== '') 
    return (
      <div style={notificationStyle}>
       	{message}
      </div>
    )
  } 

export const NotificationContext = createContext();

export const NotificationProvider = ( {children} ) => {
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('success');
	// console.log(message,status)
	
	const setNotification = (msg,severity) => {
			setMessage(msg)
			setStatus(severity)
			setTimeout(() => {
					setMessage('')
			}, 4000)
	}


  return (
    <NotificationContext.Provider value={{ setNotification }}>
			<Notification message={message} severity={status}/>
			{children}
    </NotificationContext.Provider>
  )
}
