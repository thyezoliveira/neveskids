import AppConfig from '../modules/AppConfig.js'
import InsertUserForm from '../insertUserForm/InsertUserForm'
import UserList from '../userList/UserList.jsx'

function AppProto() {
  const sis = new AppConfig()
  return (
    <div>
      <h1>{sis.sistema_id}</h1>
      <p>{sis.sistema_versao}</p>
      <InsertUserForm />
      <UserList/>
    </div>
  )
}

export default AppProto
