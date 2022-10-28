import './App.css';
import {  RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes';
import Home from './components/Home/Home';

function App() {
 
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
