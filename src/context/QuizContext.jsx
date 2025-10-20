import React, { createContext, useState } from 'react'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [skippedQuestions, setSkippedQuestions] = useState([])
  const [category, setCategory] = useState('9');
  const [difficulty, setDifficulty] = useState('medium')

  const resetQuiz = () => {
    setQuestions([])
    setCurrentQuestion(0)
    setAnswers([])
    setScore(0)
    setSkippedQuestions([])
  }

  const skipQuestion = (questionIndex) => {
    setSkippedQuestions(prev => [...prev, questionIndex])
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
        resetQuiz,
        skippedQuestions,
        skipQuestion,
        category,
        setCategory,
        difficulty,
        setDifficulty
      }}>
        {children}
    </QuizContext.Provider>
  )
}
