import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Home from './Components/Home';
import Toprated from './Components/Toprated';
import Upcomingmovie from './Components/Upcomingmovie';
import Singlemovie from './Components/Singlemovie';
import Searchmovie from './Components/Searchmovie';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/topratedmovie' element={<Toprated/>}></Route>
        <Route exact path='/upcomingmovie' element={<Upcomingmovie/>}></Route>
        <Route exact path='/singlemovie/:id' element={<Singlemovie/>}></Route>
        <Route exact path='/searchmovie/:movie' element={<Searchmovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
