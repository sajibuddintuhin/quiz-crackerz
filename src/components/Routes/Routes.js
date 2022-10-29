import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Error from "../Error";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Quiz from "../Quiz/Quiz";
import Quizs from "../Quizs/Quizs";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Header></Header>
        },
        {
          path:'/home',
          element:<Home></Home>,
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
            path:'/quiz',
            // element:<Quiz></Quiz>,
        },
        {
          path:'quiz/:id',
          element:<Quizs></Quizs>,
          loader: ({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }
        }
      ]
    },
   ]);
   export default router