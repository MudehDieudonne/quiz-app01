import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions, fetchCategories } from '../service/api';
import { Loader } from '../components/Loader';

const Home = () => {
    const { setQuestions, category, setCategory, difficulty, setDifficulty } = useContext(QuizContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const cats = await fetchCategories();
            setCategories(cats);
        };
        loadCategories();
    }, []);

    const startQuiz = async () => {
        setLoading(true);
        const questions = await fetchQuestions(category, difficulty);
        setQuestions(questions);
        setLoading(false);
        navigate('/quiz/1');
    };

    return (
        <div className="home-container">
            <div className="home-page">
                <h1>Welcome to the Trivia Challenge!</h1>
                <p>Answer 10 questions and see if you pass.</p>
                
                <div className="quiz-settings">
                    <div className="setting-group">
                        <label htmlFor="category">Select Category:</label>
                        <select 
                            id="category" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="setting-group">
                        <label htmlFor="difficulty">Select Difficulty:</label>
                        <select 
                            id="difficulty" 
                            value={difficulty} 
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>

                {loading ? <Loader /> : <button onClick={startQuiz}>Start Quiz</button>}
            </div>
        </div>
    );
};

export default Home;
