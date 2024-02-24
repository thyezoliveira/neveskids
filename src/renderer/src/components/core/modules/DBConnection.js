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
  }

  connect() {
    fetch(`${this.databaseUrl}/createdb`, this.options)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  createUser(data) {
    fetch(
      `${this.databaseUrl}/insertuser?usr_nvl_acesso=${data.usr_nvl_acesso}&usr_nome=${data.usr_nome}&usr_sobrenome=${data.usr_sobrenome}&usr_senha=${data.usr_senha}`,
      this.options
    )
      .then((response) => response.json())
      .then((data) => console.log('DADOS Salvos.', data))
  }

  getUser(usr_id) {
    fetch(`${this.databaseUrl}/getuser?usr_id=${usr_id}`)
      .then((response) => response.json())
      .then((data) => console.log('DADOS recuperados.', data))
  }
}

export default DBConnection
