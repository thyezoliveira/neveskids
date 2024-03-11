import AppConfig from '../modules/AppConfig.js'
import LoginScreen from '../loginScreen/LoginScreen.jsx'
import { useState } from 'react'
import MainMenu from '../mainMenu/mainMenu.jsx'
import '../../../assets/main_container.scss'
import '../../../../../preload/index.js'

function AppProto() {
  const sis = new AppConfig()
  const [refresh, setRefresh] = useState(false)
  const [login, setLogin] = useState(false)
  const [user_id, setUser_id] = useState(null)
  document.title = sis.sistema_id + ' ' + sis.sistema_versao

  return (
    <>
      {!login ? (
        <LoginScreen setLogin={setLogin} setUser_id={setUser_id} />
      ) : (
        <main id="mainContainer">
          <MainMenu user_id={user_id} />
        </main>
      )}
    </>
  )
}

export default AppProto
