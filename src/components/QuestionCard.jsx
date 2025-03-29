import React from 'react';

const QuestionCard = ({ questionLabel, choiceA, choiceB, votesA, votesB, userAnswers }) => {
    return (
        <div className="relative max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="absolute top-2 right-2 flex space-x-2">
                <i className="fas fa-square text-gray-400"></i>
                <i className="fas fa-trash text-red-500 cursor-pointer"></i>
            </div>
            <div className="mb-4">
                <label className="block text-gray-800 text-lg font-semibold mb-2">{questionLabel}</label>
            </div>
            <div className="flex justify-between">
                {choiceA && (
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-1">{choiceA}</label>
                        <span className="block text-gray-500 text-xs">Votes: {votesA}</span>
                    </div>
                )}
                {choiceB && (
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-1">{choiceB}</label>
                        <span className="block text-gray-500 text-xs">Votes: {votesB}</span>
                    </div>
                )}
            </div>
            {userAnswers && (
                <div className="mt-4">
                    <label className="block text-gray-600 text-sm font-medium mb-1">User Answers:</label>
                    <ul className="list-disc list-inside text-gray-500 text-xs">
                        {userAnswers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;