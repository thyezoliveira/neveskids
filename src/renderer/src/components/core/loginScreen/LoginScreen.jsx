import '../../../assets/login.scss'
import logo from './logo_asset.png'
import bg from './bg_asset.png'
import FormLayer from './FormLayer'
import PropTypes from 'prop-types'

function LoginScreen({ setLogin, setUser_id }) {
  return (
    <>
      <section id="login">
        <div className="background">
          <div className="bgPhoto">
            <FormLayer setLogin={setLogin} setUser_id={setUser_id} />
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
            <p className="credit">Desenvolvido por<br></br> <span>Jireh Digital</span></p>
          </div>
        </div>
      </section>
      
    </>
  )
}

LoginScreen.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setUser_id: PropTypes.func.isRequired
}

export default LoginScreen
