import React, { useState } from 'react';
import CreatedQuestions from '../components/CreatedQuestions';
import TwoChoiceQuestionForm from '../components/TwoChoiceQuestionForm';
import OpenQuestionForm from '../components/OpenQuestionForm';

const initialQuestions = [
    { questionLabel: 'What is your favorite color?', choiceA: 'Red', choiceB: 'Blue', votesA: 10, votesB: 5 },
    { questionLabel: 'What is your favorite animal?', choiceA: 'Cat', choiceB: 'Dog', votesA: 7, votesB: 8 },
    { questionLabel: 'Describe your perfect day.', userAnswers: ['Sunny day at the beach', 'Hiking in the mountains'] }
];

function AdminPage() {
    const [questions, setQuestions] = useState(initialQuestions);

    const handleTwoChoiceSubmit = (data) => {
        setQuestions([...questions, { questionLabel: data.question, choiceA: data.choiceA, choiceB: data.choiceB }]);
    };

    const handleOpenQuestionSubmit = (data) => {
        setQuestions([...questions, { questionLabel: data.question }]);
    };

    return (
        <div className="p-4" style={{ backgroundColor: '#03535c', minHeight: '100vh' }}>
            <CreatedQuestions questionsToDisplay={questions} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <TwoChoiceQuestionForm
                    QuestionLabel="Enter a two-choice question"
                    labelA="Choice A"
                    labelB="Choice B"
                    onSubmit={handleTwoChoiceSubmit}
                />
                <OpenQuestionForm
                    QuestionLabel="Enter an open question"
                    onSubmit={handleOpenQuestionSubmit}
                />
            </div>
        </div>
    );
}

export default AdminPage;