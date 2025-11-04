import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ duration, onTimeout }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeout();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeout]);

    return (
        <div className="timer">
            Time remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
    );
};

Timer.propTypes = {
    duration: PropTypes.number.isRequired,
    onTimeout: PropTypes.func.isRequired
};

export default Timer;