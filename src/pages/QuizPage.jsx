import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'
import QuestionCard from '../components/QuestionCard'

const Quiz = () => {
    const { id } = useParams()
    const questionIndex = parseInt(id) - 1
    const { questions, currentQuestion, setCurrentQuestion, setAnswers, score, setScore } = useContext(QuizContext)
    const navigate = useNavigate()

    const question = questions[questionIndex]

    useEffect(() => {
        if (!questions.length) {
            navigate('/')
        }
    }, [questions, navigate])

    const handleAnswer = (answer) => {
        setAnswers((prev) => [...prev, answer])
        if (answer === question.correct_answer) setScore(score + 1)

        if (questionIndex + 1 < questions.length) {
            setCurrentQuestion(questionIndex + 1)
            navigate(`/quiz/${questionIndex + 2}`)
        } else {
            navigate('/results')
        }
    }

    if (!question) return null

    return (
        <div className="quiz-page">
        </div>
    )
}

export default Quiz
