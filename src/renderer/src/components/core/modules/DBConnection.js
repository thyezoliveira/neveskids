class DBConnection {
  constructor() {
    this.databaseUrl = 'http://localhost:2024'
    this.connect = this.connect.bind(this)
    this.options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      } 
    }
    this.connect()
    this.createUser = this.createUser.bind(this)
    this.createUser({ usr_nvl_acesso: 1, usr_nome: 'jireh', usr_sobrenome: 'Digital', usr_senha: 'digital' })
    this.createUser({ usr_nvl_acesso: 1, usr_nome: 'forja', usr_sobrenome: 'Tech', usr_senha: 'tech' })
  }

  connect() {
    fetch(`${this.databaseUrl}/createusertb`, this.options)
  }

  createUser(data, setFeedback=null) {
    fetch(
      `${this.databaseUrl}/insertuser?usr_nvl_acesso=${data.usr_nvl_acesso}&usr_nome=${data.usr_nome}&usr_sobrenome=${data.usr_sobrenome}&usr_senha=${data.usr_senha}`,
      this.options
    )
      .then((response) => response.json())
      .then((data) => {
        if ( setFeedback != null) {
          setFeedback(data.action)
        }
      })
  }

  getUser(usr_id) {
    fetch(`${this.databaseUrl}/getuser?usr_id=${usr_id}`)
      .then((response) => response.json())
      .then((data) => console.log('DADOS recuperados.', data))
  }
}

export default DBConnection
