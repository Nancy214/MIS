import React, { useEffect } from 'react'

const User = ({socket, user}) => {
  useEffect(()=>{
    socket.emit("sendNotification",{
      user: user
    })
    socket.emit("sendLoginInfo",{
      user: user
    })

  },[socket,user])
  //console.log(socket)
  return (
    <>
      <h3>You have logged in</h3>
    </>
     
  )
}

export default User