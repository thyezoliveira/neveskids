import { useState } from 'react'
import '../../../assets/mainMenu.scss'
import icon from './icon.png'
import PropTypes from 'prop-types'

function MainMenu({ user_id }) {
  const [user, setUser] = useState({
    id: user_id,
    nome: null
  })

  const handleRequest = (e) => {
    e.preventDefault()

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`http://localhost:2024/getuser?usr_id=${user.id}`, options).then((response) => {
      response.json().then((data) => {
        setUser({
          id: user.id,
          nome: data.user[0].usr_nome,
          sobrenome: data.user[0].usr_sobrenome
        })
      })
    })
  }

  return (
    <aside id="menu">
      <div className="user">
        <p>{user.nome} {user.sobrenome}</p>
        <div className="avatar">
          <img onLoad={handleRequest} id="avatar" src={icon} alt="Usuário" />
        </div>
      </div>

      <div className="navigationContainer">
        <nav>
          <button className="atendimento">Atendimento</button>
          <button className="atendimento">Clientes</button>
          <button className="atendimento">Informações</button>
          <button className="atendimento">Configurações</button>
          <button className="atendimento">Usuários</button>
        </nav>
      </div>
    </aside>
  )
}

MainMenu.propTypes = {
  user_id: PropTypes.number.isRequired
}

export default MainMenu
