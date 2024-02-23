import { useEffect, useState } from 'react'
import '../../../assets/forms.scss'
import AppConfig from '../modules/AppConfig'

function InsertUserForm() {
  const [access, setAccess] = useState(0)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const appConfig = new AppConfig()

  const handleSend = (e) => {
    e.preventDefault()
    const form = document.getElementById('userForm')
    form.addEventListener('submit', () => {
      setAccess(form[0].value)
      setName(form[1].value)
      setLastName(form[2].value)
    })
  }
  
  const tryToSave = (data) => {
    const form = document.getElementById('userForm')
    console.log("Tentando salvar...")
    appConfig.mainDatabase.createUser(data)
  }

  useEffect(() => {
    if (access !== 0 && name !== '' && lastName !== '') {
      const data = {
        usr_nvl_acesso: Number(access),
        usr_nome: name,
        usr_sobrenome: lastName
      }
      tryToSave(data)
    }
  }, [access, name, lastName])

  return (
    <div>
      <form id="userForm" onSubmit={(e) => handleSend(e)}>
        <label htmlFor="access">Test</label>
        <select id="access">
          <option value="1">Administrador</option>
          <option value="2">Usuário</option>
        </select>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" placeholder="Nome" />
        <label htmlFor="lname">Sobrenome</label>
        <input id="lname" type="text" placeholder="Sobrenome" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default InsertUserForm
