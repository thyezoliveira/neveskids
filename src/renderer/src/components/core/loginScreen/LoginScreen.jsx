import '../../../assets/login.scss'
import logo from './logo_asset.png'
import bg from './bg_asset.png'

function LoginScreen() {
  return (
    <>
      <section id="login">
        <div className="background">
          <div className="bgPhoto">
            <div className="effect"></div>
            <div className="photoLayer">
              <img src={bg} alt="bg" />
            </div>
          </div>
          <div className="sideContrast">
            <img className="logo" src={logo} alt="logo" />
            <p className="release">
              <span className="sysType">SG</span>
              <span className="sysVer">v1.0</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginScreen
