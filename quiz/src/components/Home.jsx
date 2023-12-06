import { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="container1 flex">
        <div className='title'>Quiz App</div>
        <div className="play-button"><Link to="/quiz">Play</Link></div>
      </div>
    )
  }
}

export default Home
