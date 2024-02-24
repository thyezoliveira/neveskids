import { useState } from 'react'
import '../../../assets/forms.scss'
import AppConfig from '../modules/AppConfig'

function InsertUserForm() {
  const appConfig = new AppConfig()
  const [insertPass, setInsertPass] = useState(false)
  const [access, setAccess] = useState(1)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState(undefined)

  const handleSend = (e) => {
    e.preventDefault()
    inputPassword()
  }

  const inputPassword = () => {
    setInsertPass(true)
  }

  const tryToSave = (e) => {
    e.preventDefault()
    setTimeout(() => {
      console.log('Tentando salvar...', data)
      appConfig.mainDatabase.createUser(data)
    }, 2000)
  }

  return (
    <div>
      {!insertPass ? (
        <form id="userForm" onSubmit={(e) => handleSend(e)}>
          <label htmlFor="access">Test</label>
          <select defaultValue="1" id="access" onChange={(e) => setAccess(Number(e.target.value))}>
            <option value="1">Administrador</option>
            <option value="2">Usuário</option>
          </select>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="lname">Sobrenome</label>
          <input
            id="lname"
            type="text"
            placeholder="Sobrenome"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">Avançar</button>
        </form>
      ) : (
        <form id="passForm" onSubmit={(e) => tryToSave(e)}>
          <input
            type="text"
            placeholder="senha"
            onChange={(e) => {
              setPassword(e.target.value)
              setData({
                usr_nvl_acesso: access,
                usr_nome: name,
                usr_sobrenome: lastName,
                usr_senha: password
              })
            }}
          />
          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  )
}

export default InsertUserForm
