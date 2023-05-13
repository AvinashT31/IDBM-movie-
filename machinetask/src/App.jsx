import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
