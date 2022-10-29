import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
        const data = useLoaderData()
        const  questionsData = data.data.questions;
        console.log(questionsData)
        return (
                <div>
                        {
                            questionsData.map(data => <Quiz 
                            key={data.id}
                            data={data}
                            ></Quiz>)   
                        }
                </div>
        );
};

export default Quizs;