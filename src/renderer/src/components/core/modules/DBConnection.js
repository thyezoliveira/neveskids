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

  createUser({usr_nvl_acesso, usr_nome, usr_sobrenome}) {
    fetch(
      `${this.databaseUrl}/insertuser?usr_nvl_acesso=${usr_nvl_acesso}&usr_nome=${usr_nome}&usr_sobrenome=${usr_sobrenome}`,
      this.options
    )
      .then((response) => response.json())
      .then((data) => console.log("DADOS Salvos.", data))
  }
}

export default DBConnection
