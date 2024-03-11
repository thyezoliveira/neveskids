import PropTypes from 'prop-types'

function FormLayer({ setLogin, setUser_id }) {
  const handleSend = (e) => {
    e.preventDefault()
    // setLogin(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const url = `http://localhost:2024/auth?usr_nome=${data.usr_nome}&usr_senha=${data.usr_senha}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options).then((response) => {
      response.json().then((data) => {
        setUser_id(data.authStatus.id)
        setLogin(data.authStatus.auth)
      })
    })
  }

  return (
    <div className="formLayer">
      <form onSubmit={handleSend}>
        <div className="inputBox">
          <input type="text" name="usr_nome" placeholder="Login" autoComplete="username" />
        </div>
        <div className="inputBox">
          <input type="password" name="usr_senha" placeholder="Senha" autoComplete="current-password"/>
        </div>
        <div className="inputBox">
          <input type="submit" value="Entrar" />
        </div>
      </form>
    </div>
  )
}

FormLayer.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setUser_id: PropTypes.func.isRequired
}

export default FormLayer
