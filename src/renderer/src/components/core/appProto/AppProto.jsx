import AppConfig from '../modules/AppConfig.js'
import InsertUserForm from '../insertUserForm/InsertUserForm'
import UserList from '../userList/UserList.jsx'
import LoginScreen from '../loginScreen/LoginScreen.jsx'
import { useState } from 'react'

function AppProto() {
  const sis = new AppConfig()
  const [refresh, setRefresh] = useState(false)
  const [login, setLogin] = useState(false)
  return (
    <>
      <LoginScreen />
    </>
  )
}

export default AppProto
