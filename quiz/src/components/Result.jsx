import { Link,useLocation } from 'react-router-dom'

function Result() {

  const location = useLocation()
  const {attempted,correct,wrong} = location.state

  return (
    <div className='container3 flex'>
        <div className="result">Result</div>
        <div className="res-box flex">
            <div className="quote">You need more practice!</div>
            <div className="score">Your score is 20 %</div>
            <div className="line flex"><span>Total number of questions</span><span>15</span></div>
            <div className="line flex"><span>Number Of attempted questions</span><span>{attempted}</span></div>
            <div className="line flex"><span>Number of correct answers</span><span>{correct}</span></div>
            <div className="line flex"><span>Number Of wrong answers</span><span>{wrong}</span></div>
        </div>
        <div className="buttons2 flex">
            <Link to="/quiz"><div className="again-button button4">Play Again</div></Link>
            <Link to="/project-react-quiz-app-three-boilerplate/"><div className="home-button button4">Back to home</div></Link>
        </div>
      </div>
  )
}

export default Result