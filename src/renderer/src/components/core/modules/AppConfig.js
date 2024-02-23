import DBConnection from './DBConnection.js'

class AppConfig {
  constructor() {
    this.title = "SG Neves Kids v1.0"
    this.mainDatabase = new DBConnection()
    // this.mainDatabase.getAll()
  }

  // getSystemData() {
  //   return this.sampleData.getSis()
  // }
}

export default AppConfig
