import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Quizs from "../Quizs/Quizs";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            // element:<Home></Home>
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
            // path:'/quiz',
            // element:<Quizs></Quizs>,
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