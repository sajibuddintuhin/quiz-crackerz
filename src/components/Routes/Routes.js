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
          index:true,
          element:<Home></Home>
        },
        {
          path:'/home',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          } ,
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
            path:'/quiz',
            element:<Quizs></Quizs>
        }
      ]
    },
   ]);
   export default router