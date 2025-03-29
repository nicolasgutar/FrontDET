import React from 'react';
import QuestionCard from './QuestionCard';

const CreatedQuestions = ({ questionsToDisplay }) => {
    return (
        <div className="flex overflow-x-auto space-x-4 p-2">
            {questionsToDisplay.map((question, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                    <QuestionCard
                        questionLabel={question.questionLabel}
                        choiceA={question.choiceA}
                        choiceB={question.choiceB}
                        votesA={question.votesA}
                        votesB={question.votesB}
                    />
                </div>
            ))}
        </div>
    );
};

export default CreatedQuestions;