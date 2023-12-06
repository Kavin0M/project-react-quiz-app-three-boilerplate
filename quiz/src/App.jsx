import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/project-react-quiz-app-three-boilerplate/" element={<Home />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/result' element={<Result />}/>
      </Routes>
    </>
  )
}

export default App
