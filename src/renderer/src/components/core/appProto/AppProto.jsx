import AppConfig from '../modules/AppConfig.js'
import InsertUserForm from '../insertUserForm/InsertUserForm'

function AppProto() {
  const sis = new AppConfig()
  return (
    <div>
      <h1>{sis.title}</h1>
      <InsertUserForm />
    </div>
  )
}

export default AppProto
