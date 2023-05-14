import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Toprated from './Components/Toprated';
import Upcomingmovie from './Components/Upcomingmovie';
import Singlemovie from './Components/Singlemovie';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/topratedmovie' element={<Toprated/>}></Route>
        <Route exact path='/upcomingmovie' element={<Upcomingmovie/>}></Route>
        <Route exact path='/singlemovie/:id' element={<Singlemovie/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
