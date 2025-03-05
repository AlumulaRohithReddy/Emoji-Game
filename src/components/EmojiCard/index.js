import './index.css'

const EmojiCard = props => {
  const {details, count, c} = props
  const {id, emojiName, emojiUrl} = details
  const click = () => {
    count(id)
    c()
  }
  return (
    <li className="card" onClick={click}>
      <button className="btn" type="button">
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}

export default EmojiCard
