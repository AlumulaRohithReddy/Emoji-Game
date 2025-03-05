import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    tp: 0,
    wol: false,
    ce: [],
  }

  situation = x => {
    this.setState({wol: x, ce: []})
  }

  c = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  count = y => {
    const {emojisList} = this.props
    const {ce} = this.state
    if (ce.includes(y)) {
      this.setState(prev => ({
        wol: true,
        ce: [],
        tp: ce.length >= prev.tp ? ce.length : prev.tp,
      }))
    } else if (emojisList.length - 1 === ce.length) {
      this.setState({wol: true, tp: ce.length + 1})
    }

    this.setState(prev => ({ce: [...prev.ce, y]}))
  }

  render() {
    const {tp, wol, ce} = this.state
    const {emojisList} = this.props
    const score = ce.length
    return (
      <>
        <NavBar s={score} t={tp} w={wol} />
        <div className="container">
          {!wol && (
            <ul className="emojis">
              {emojisList.map(each => (
                <EmojiCard
                  details={each}
                  key={each.id}
                  count={this.count}
                  c={this.c}
                />
              ))}
            </ul>
          )}
          {wol && (
            <WinOrLoseCard
              wol={wol}
              score={score}
              tp={tp}
              situation={this.situation}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
