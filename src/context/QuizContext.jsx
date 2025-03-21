import React, { createContext, useState } from 'react'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  const resetQuiz = () => {
    setQuestions([])
    setCurrentQuestion(0)
    setAnswers([])
    setScore(0)
  }

  return (
    <QuizContext.Provider value={{
      questions,
      setQuestions,
      currentQuestion,
      setCurrentQuestion,
      answers,
      setAnswers,
      score,
      setScore,
      resetQuiz
    }}>
      {children}
    </QuizContext.Provider>
  )
}
