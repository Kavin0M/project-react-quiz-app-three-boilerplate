import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <button><Link to="/">Start</Link></button>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/result' element={<Result />}/>
      </Routes>
    </>
  ) 
}

export default App
