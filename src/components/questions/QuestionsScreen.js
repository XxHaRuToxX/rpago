import React, { useState } from 'react';
import './questionsScreen.css'
import {questions} from '../../data/requestQuestions';

export const  QuestionsScreen=()=> {

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='questions-center'>
			<div className='questions-container'>
				{showScore ? (
					<div className='score-section'>
						Contestaste {score} de {questions.length} preguntas.
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span className='questions-questions' >Pregunta {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text questions-questions'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
