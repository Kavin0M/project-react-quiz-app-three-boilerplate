import { Component } from 'react'
import questions from './resources/quizQuestion.json'
import { Link } from 'react-router-dom'

export class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      num: 0,
      attempted: 0,
      correct: 0,
      wrong: 0
    }
  }

  nextQues(){
    if (this.state.num < 14){
      this.setState({
        num: this.state.num+1
      })
    }
  }

  prevQues(){
    if (this.state.num > 0){
      this.setState({
        num: this.state.num-1
      })
    }
  }

  checkOption(e){
    if (questions[this.state.num].answer === e.target.textContent){
      alert("Correct answer")
      this.nextQues()
      this.setState({correct: this.state.correct+1})
    }else{
      alert("Incorrect answer")
      this.nextQues()
      this.setState({wrong: this.state.wrong+1})
    }
    this.setState({attempted: this.state.attempted+1})
  }

  exitQuiz(){
    alert("Are you sure you want to quit ?")
  }

  render() {
    return (
      <div className='container2 flex'>
        <div className="head">Question</div>
        <div className="num">{this.state.num + 1} of 15</div>
        <div className="question">{questions[this.state.num].question}</div>
        <div className="grid">
            <div className="option" onClick={(e) => this.checkOption(e)}>{questions[this.state.num].optionA}</div>
            <div className="option" onClick={(e) => this.checkOption(e)}>{questions[this.state.num].optionB}</div>
            <div className="option" onClick={(e) => this.checkOption(e)}>{questions[this.state.num].optionC}</div>
            <div className="option" onClick={(e) => this.checkOption(e)}>{questions[this.state.num].optionD}</div>
        </div>
        <div className="buttons1 flex">
            <div className="button1 button" onClick={() => this.prevQues()}>Previous</div>
            <div className="button2 button" onClick={() => this.nextQues()}>Next</div>
            <div className="button3 button" onClick={() => this.exitQuiz()}>Quit</div>
            <Link to= "/result"
              state={{attempted: this.state.attempted, correct: this.state.correct, wrong: this.state.wrong}}
            >
              <div className="button5 button">
                Finish
              </div>
            </Link>
        </div>
      </div>
    )
  }
}

export default Quiz