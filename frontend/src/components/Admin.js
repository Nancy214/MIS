import React, {useEffect, useState} from 'react'


const Admin = ({socket, user}) => {
  const [notification, setNotification] = useState(null)
  const [loginInfo, setLoginInfo] = useState(null)

  useEffect(()=>{
    socket.on("getNotification", (user) => {
       setNotification(user)
    })
    socket.on("getLoginInfo", (user) => {
       setLoginInfo(user)
    })

  }, [socket, user])
  
  
  
  return (
    <>
      <h3>Admin</h3>
      {notification && 
        <>
          <h6>{notification.user.user.email} signed in with {notification.user.user.ip}</h6>
          
        </>
      }
      {loginInfo && 
        <>
          <h6>{loginInfo.user.user.email} signed in at {loginInfo.user.user.lastLogin} through another device</h6>
          
        </>
      }
      
    </>
  )
}

export default Admin