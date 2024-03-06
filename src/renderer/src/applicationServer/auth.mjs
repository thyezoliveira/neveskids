import crypto from 'crypto'

export default class Auth {
  constructor() {
    this.db = 'tb_usuario'
    this.authResponse = { auth: false, id: null }
    this.userAuthorization = this.userAuthorization.bind(this)
  }

  createPassword(pass) {
    const password = crypto.createHash('sha256').update(pass).digest('hex')
    const hash100Caracteres = password.padEnd(100, '0').slice(0, 100)
    return hash100Caracteres
  }

  userAuthorization(user, db, res) {
    const password = crypto.createHash('sha256').update(user.usr_senha).digest('hex')
    const hash100Caracteres = password.padEnd(100, '0').slice(0, 100)

    db.get(
      `SELECT usr_id FROM ${this.db} WHERE usr_nome = ? AND usr_senha = ?`,
      [user.usr_nome, hash100Caracteres],
      function (err, result) {
        if (err) {
          return console.error(err.message)
        }

        if (result) {
          this.authResponse = { auth: true, id: result.usr_id }
        }

        const response = {
          action: 'Usuario autenticado!',
          method: 'GET',
          authStatus: this.authResponse
        }
        res.json(response)
      }
    )
  }

  userLogOut() {
    this.authResponse = { auth: false, id: null }
  }
}
