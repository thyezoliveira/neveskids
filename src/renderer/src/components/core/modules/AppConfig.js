import DBConnection from './DBConnection.js'

class AppConfig {
  constructor() {
    this.sistema_id = "SG Neves Kids"
    this.sistema_versao = this.buildVersionNumber()
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
    const release = `${version}/${preRelease}`
    return release
  }
}
export default AppConfig
