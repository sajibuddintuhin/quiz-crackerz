import React from 'react';

const Quiz = ({data}) => {
    // console.log(data.id)
    const {question, options, correctAnswer
    } = data;
    return (
        <div className="mt-[35px]">
            <select className="select select-info  w-[700px] ">
                <option >{question}</option>
                <option>{options[0]}</option>
                <option>{options[1]}</option>
                <option>{options[2]}</option>
                <option>{options[3]}</option>
            </select>
        </div>
    );
};

export default Quiz;