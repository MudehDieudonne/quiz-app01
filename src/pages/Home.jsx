import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'
import { fetchQuestions } from '../service/api'
import { Loader } from '../components/Loader'

const Home = () => {


    return (
        <div className="home-page">

        </div>
    )
}

export default Home
