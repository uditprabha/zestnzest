
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizAnswer } from '../types';

interface QuizPageProps {
    onQuizComplete: (productId: string) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ onQuizComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswers, setShowAnswers] = useState(true);

    const handleAnswerClick = (answer: QuizAnswer) => {
        setShowAnswers(false);
        setTimeout(() => {
            if (answer.productId) {
                onQuizComplete(answer.productId);
            } else if (answer.nextQuestion !== undefined) {
                const nextQuestion = QUIZ_QUESTIONS.find(q => q.id === answer.nextQuestion);
                if (nextQuestion) {
                    setCurrentQuestionIndex(nextQuestion.id);
                    setShowAnswers(true);
                }
            }
        }, 500);
    };

    const currentQuestion = QUIZ_QUESTIONS.find(q => q.id === currentQuestionIndex);

    if (!currentQuestion) {
        return <div className="text-center p-8">Loading quiz...</div>;
    }
    
    const { step: currentStep, totalSteps } = currentQuestion;

    return (
        <div className="max-w-3xl mx-auto py-12 text-center">
             <div className="w-full mb-8">
                <div className="flex justify-between mb-1 text-sm font-medium text-pink-700">
                    <span>Step {currentStep} of {totalSteps}</span>
                </div>
                <div className="w-full bg-rose-200 rounded-full h-2.5">
                    <div className="bg-pink-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
                </div>
            </div>

            <div key={currentQuestion.id} className="animate-fade-in-question">
                <h2 className="text-3xl font-bold mb-8">{currentQuestion.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(answer)}
                            className={`p-6 text-lg font-semibold border-2 border-rose-200 rounded-lg bg-white hover:border-pink-500 hover:bg-rose-100/50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-left
                                ${!showAnswers ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fadeInQuestion {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-question {
                    animation: fadeInQuestion 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default QuizPage;
