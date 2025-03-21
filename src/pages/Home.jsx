import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'
import { fetchQuestions } from '../service/api'
import { Loader } from '../components/Loader'

const Home = () => {
    const { setQuestions } = useContext(QuizContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const startQuiz = async () => {
        setLoading(true)
        const questions = await fetchQuestions()
        setQuestions(questions)
        setLoading(false)
        navigate('/quiz/1')
    }

    return (
        <div className="home-page">
            <h1>Welcome to the Trivia Challenge!</h1>
            <p>Answer 10 questions and see if you pass.</p>
            {loading ? <Loader /> : <button onClick={startQuiz}>Start Quiz</button>}
        </div>
    )
}

export default Home
