import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Home = () => {
    const data = useLoaderData();
    const quizData = data.data
    console.log(quizData)
    return (
        <div>
            {
                quizData.map(quiz =><div key={quiz.id} className="card w-96 bg-base-100 shadow-xl">
                <h2>QUIZ:{quiz.total}</h2>
                <figure><img src={quiz.logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{quiz.name}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>)
            }
            {/* {
                quizData.map(quiz =><Quizs
                key={quiz.id}
                quiz={quiz}
                ></Quizs>)
            } */}
             
        </div>
    );
};

export default Home;