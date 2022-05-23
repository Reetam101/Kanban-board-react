import './Board.css'
import {FaEllipsisH} from 'react-icons/fa'

const Board = () => {
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">Pending <span>2</span></p>
        <span style={{alignItems: 'center', display: 'flex'}}><FaEllipsisH /></span>
      </div>
      <div className="board_cards">
        <h3>Card 1</h3>
        <h3>Card 2</h3>
        <h3>Card 3</h3>
      </div>
    </div>
  )
}

export default Board