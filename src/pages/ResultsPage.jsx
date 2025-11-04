import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'

const Results = () => {
    const { questions, answers, score, resetQuiz } = useContext(QuizContext)
    const navigate = useNavigate()

    const handlePlayAgain = () => {
        resetQuiz()
        navigate('/')
    }

    return (
        <div className="results-page">
            <h1>Your Results</h1>
            <p>Score: {score}/10</p>
            <p>{score >= 5 ? 'You Passed!' : 'You Failed!'}</p>
            <ul>
                {questions.map((q, index) => (
                    <li key={index}>
                        <p><strong>Question:</strong> {q.question}</p>
                        <p><strong>Your Answer:</strong> {answers[index]}</p>
                        <p><strong>Correct Answer:</strong> {q.correct_answer}</p>
                    </li>
                ))}
            </ul>
            <button onClick={handlePlayAgain}>Play Again</button>
        </div>
    )
}

export default Results
