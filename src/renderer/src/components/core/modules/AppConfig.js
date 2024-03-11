import DBConnection from './DBConnection.js'

class AppConfig {
  constructor() {
    this.sistema_id = "SG Neves Kids"
    this.sistema_versao = this.buildVersionNumber()
    this.sistema_desenvolvedor = 'Jireh Digital'
    this.sistema_parceiro = 'Forjatech'
    this.sistema_inicio_desenvolvimento = 'xx/xx/xxxx'
    this.sistema_lancamento = ''
    this.sistema_atualizacao = ''
    this.valor_hora = 80.0
    this.acescimo_min = 2.0
    this.total_atendidos = 0
    this.mainDatabase = new DBConnection()
  }

  buildVersionNumber() {
    const core = 1
    const major = 0
    const minor = 0
    const phase = "alpha"
    const build = 1
    const version = `${core}.${major}.${minor}`
    const preRelease = `${phase}-${build}`
    const release = `${version}.${preRelease}`
    return release
  }
}
export default AppConfig
