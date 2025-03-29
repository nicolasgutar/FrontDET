import React, { useState } from 'react';

const TwoChoiceQuestionForm = ({ QuestionLabel, labelA, labelB, onSubmit }) => {
    const [question, setQuestion] = useState('');
    const [choiceA, setChoiceA] = useState('');
    const [choiceB, setChoiceB] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ question, choiceA, choiceB });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">{QuestionLabel}</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">{labelA}</label>
                <input
                    type="text"
                    value={choiceA}
                    onChange={(e) => setChoiceA(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">{labelB}</label>
                <input
                    type="text"
                    value={choiceB}
                    onChange={(e) => setChoiceB(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-[#0dc2d7] text-white py-2 px-4 rounded-lg hover:bg-[#5ddbe5] transition">
                Submit
            </button>
        </form>
    );
};

export default TwoChoiceQuestionForm;