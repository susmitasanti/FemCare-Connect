import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

function UserState(props) {
    const [login, setLogin] = useState(false)
    const [userInfo, setUserInfo]= useState([])

  return (
    <UserContext.Provider value={{ login, setLogin, userInfo, setUserInfo}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState
