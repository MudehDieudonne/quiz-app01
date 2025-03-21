import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/QuizPage'
import Results from './pages/ResultsPage'
import { QuizProvider } from './context/QuizContext'

const App = () => (
  <QuizProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  </QuizProvider>
)

export default App
