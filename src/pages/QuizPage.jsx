import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'
import QuestionCard from '../components/QuestionCard'
import Timer from '../components/Timer';

const Quiz = () => {
    const { id } = useParams()
    const questionIndex = parseInt(id) - 1
    const navigate = useNavigate()
    const { 
        questions, 
        currentQuestion, 
        setCurrentQuestion, 
        setAnswers, 
        score, 
        setScore,
        skipQuestion,
        skippedQuestions 
    } = useContext(QuizContext)

    const question = questions[questionIndex]

    useEffect(() => {
        if (!questions.length) {
            navigate('/')
        }
    }, [questions, navigate])

    const handleAnswer = (answer) => {
        setAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[questionIndex] = answer;
            return newAnswers;
        });
        
        if (answer === question.correct_answer) setScore(score + 1)
        handleNext()
    }

    const handleSkip = () => {
        skipQuestion(questionIndex)
        handleNext()
    }

    const handleNext = () => {
        if (questionIndex + 1 < questions.length) {
            setCurrentQuestion(questionIndex + 1)
            navigate(`/quiz/${questionIndex + 2}`)
        } else {
            navigate('/results')
        }
    }

    const handleTimeout = () => {
        handleNext()
    }

    if (!question) return null

    return (
        <div className="quiz-page">
            <Timer duration={30} onTimeout={handleTimeout} />
            <h2>Question {id} of {questions.length}</h2>
            <QuestionCard question={question} onAnswer={handleAnswer} />
            <button className='skipp' onClick={handleSkip}>Skip Question</button>
            {skippedQuestions.length > 0 && (
                <div className="skipped-info">
                    <p>Skipped questions: {skippedQuestions.length}</p>
                </div>
            )}
        </div>
    )
}

export default Quiz
