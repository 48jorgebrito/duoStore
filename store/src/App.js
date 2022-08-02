import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Bag from './components/Pages/Bag/Bag';
import Cadastro from './components/Pages/Cadastro/Cadastro';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/bag' element={<Bag/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
