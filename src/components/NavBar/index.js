// Write your code here.
import './index.css'

const NavBar = props => {
  const {s, t, w} = props

  return (
    <div>
      {!w && (
        <div className="bar">
          <div className="f">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="image"
            />
            <h1 className="main">Emoji Game</h1>
          </div>
          <div className="sc">
            <p className="para">Score: {s}</p>
            <p className="para">Top Score: {t}</p>
          </div>
        </div>
      )}
      {w && (
        <div className="bar">
          <div className="f">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="image"
            />
            <p className="main">Emoji Game</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
