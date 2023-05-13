import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Register/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
