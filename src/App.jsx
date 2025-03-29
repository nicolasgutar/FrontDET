import React, { useState, useEffect } from 'react';
import './index.css';

const mockApiCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                questionLabel: 'What is your favorite color?',
                choiceA: 'Red',
                choiceB: 'Blue',
                votesA: 10,
                votesB: 5,
                type: 'twoChoice'
            });
        }, 1000);
    });
};

function App() {
    const [question, setQuestion] = useState(null);
    const [votesA, setVotesA] = useState(0);
    const [votesB, setVotesB] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);

    useEffect(() => {
        mockApiCall().then((data) => {
            setQuestion(data);
            setVotesA(data.votesA);
            setVotesB(data.votesB);
        });
    }, []);

    const handleVoteA = () => {
        setVotesA(votesA + 1);
        setHasVoted(true);
    };

    const handleVoteB = () => {
        setVotesB(votesB + 1);
        setHasVoted(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = e.target.elements.answer.value;
        console.log(`Submitted answer: ${answer}`);
    };

    if (!question) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#03535c' }}>
            <div className="max-w-2xl w-full mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="mb-6">
                    <label className="block text-gray-800 text-2xl font-semibold mb-4">{question.questionLabel}</label>
                </div>
                {question.type === 'twoChoice' ? (
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col sm:flex-row justify-between w-full mb-6">
                            <span className="text-gray-700 text-lg">Votes for {question.choiceA}: {votesA}</span>
                            <span className="text-gray-700 text-lg">Votes for {question.choiceB}: {votesB}</span>
                        </div>
                        {!hasVoted ? (
                            <div className="flex flex-col sm:flex-row justify-between w-full">
                                <button
                                    className="bg-[#0dc2d7] text-white py-3 px-6 rounded-lg hover:bg-[#5ddbe5] transition text-lg mb-4 sm:mb-0"
                                    onClick={handleVoteA}
                                >
                                    Vote {question.choiceA}
                                </button>
                                <button
                                    className="bg-[#0dc2d7] text-white py-3 px-6 rounded-lg hover:bg-[#5ddbe5] transition text-lg"
                                    onClick={handleVoteB}
                                >
                                    Vote {question.choiceB}
                                </button>
                            </div>
                        ) : (
                            <label className="block text-gray-800 text-2xl font-semibold mb-4">Already voted</label>
                        )}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-6">
                        <input
                            type="text"
                            name="answer"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#0dc2d7] text-white py-3 px-6 rounded-lg hover:bg-[#5ddbe5] transition mt-4 text-lg"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default App;