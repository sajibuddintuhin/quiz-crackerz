import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Home = () => {
    const quizData = useLoaderData()
    const quiz = quizData.data
    return (
        <div className="grid grid-cols-2 mx-10 mt-11 ">
            {
                quiz.map(data=><div key={data.id}  className="card mt-10 w-96 bg-base-100 shadow-xl">
                <h2>QUIZ:{data.total}</h2>
                <figure><img src={data.logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`../Quiz/${data.id}`}>hy</Link></button>
                    </div>
                </div>
                </div>)
            }
             
        </div>
    );
};

export default Home;