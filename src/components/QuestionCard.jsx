import React from 'react'
import PropTypes from 'prop-types'

const QuestionCard = ({ question, onAnswer }) => {
    return (
        <div className="question-card">
            <h4 dangerouslySetInnerHTML={{ __html: question.question }} />
            <div>
                <button onClick={() => onAnswer('True')}>True</button>
                <button onClick={() => onAnswer('False')}>False</button>
            </div>
        </div>
    )
}

QuestionCard.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswer: PropTypes.func.isRequired
}

export default QuestionCard
