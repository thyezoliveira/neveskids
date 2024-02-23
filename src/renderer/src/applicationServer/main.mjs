import { fileURLToPath } from 'url'
import express from 'express'
import path from 'path'
import sqlite3 from 'sqlite3'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 2024
var db = null

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/createdb', (req, res) => {
  const dbpath = path.join(__dirname, 'neveskids.db')
  if (db === null) {
    db = new sqlite3.Database(dbpath)
  }
  db.serialize(() => {
    db.run(
      'CREATE TABLE IF NOT EXISTS tb_usuario (usr_id INTEGER PRIMARY KEY AUTOINCREMENT, usr_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, usr_nvl_acesso INTEGER(1), usr_nome TEXT, usr_sobrenome TEXT, usr_senha TEXT(100))'
    )
  })
  const response = {
    action: 'Banco de dados e tabela criados com sucesso!',
    method: 'GET'
  }
  res.json(response)
})

app.get('/insertuser', (req, res) => {
  const usr_nvl_acesso = req.query.usr_nvl_acesso
  const usr_nome = req.query.usr_nome
  const usr_sobrenome = req.query.usr_sobrenome
  const usr_senha = req.query.usr_senha
  var newUser = null
  db.serialize(() => {
    newUser = db.run(
      `INSERT INTO tb_usuario (usr_nvl_acesso, usr_nome, usr_sobrenome, usr_senha) VALUES (${usr_nvl_acesso}, '${usr_nome}', '${usr_sobrenome}', '${usr_senha}')`
    )
  })
  const response = {
    action: 'Usuario inserido com sucesso!',
    method: 'GET',
    newUser: newUser.user_id
  }
  res.json(response)
})

app.get('/listusers', (req, res) => {
  db.all('SELECT * FROM tb_usuario', (err, rows) => {
    if(err){
      res.status(500).json({ error: err.message })
      return
    }
    res.json({ users: rows })
  })
})

app.listen(port, () => {
  console.log(`O servidor esta em modo de escuta em http://localhost:${port}`)
})
