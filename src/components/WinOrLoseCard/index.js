import './index.css'

const WinOrLoseCard = props => {
  const {wol, tp, situation, score} = props

  const pa = () => {
    situation(!wol)
  }

  return (
    <div>
      {score < 12 && (
        <div className="sub">
          <div className="first">
            <h1 className="result">You Lose</h1>
            <p className="p">Score</p>
            <p className="re">{tp}/12</p>
            <button className="bt" type="button" onClick={pa}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="i"
          />
        </div>
      )}
      {score === 12 && (
        <div className="sub">
          <div className="first">
            <h1 className="result">You Won</h1>
            <p className="p">Best Score</p>
            <p className="re">{tp}/12</p>
            <button className="bt" type="button" onClick={pa}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="i"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
